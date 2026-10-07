# Next.js App Router Patterns Reference

## Parallel Data Fetching in Server Components

// GOOD - parallel fetching
async function ProductPage({ params }: { params: { id: string } }) {
  const [product, reviews, related] = await Promise.all([
    getProduct(params.id),
    getReviews(params.id),
    getRelatedProducts(params.id),
  ]);
  return <ProductView product={product} reviews={reviews} related={related} />;
}

---

## Streaming with Suspense

// layout.tsx or page.tsx
import { Suspense } from 'react';

export default function Page() {
  return (
    <main>
      <StaticContent />  {/* Renders immediately */}
      <Suspense fallback={<ReviewsSkeleton />}>
        <ReviewsSection />  {/* Streams in when ready */}
      </Suspense>
    </main>
  );
}

---

## Server Action with Full Validation

'use server';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const CreatePostSchema = z.object({
  title: z.string().min(1).max(200),
  content: z.string().min(10),
  published: z.boolean().default(false),
});

type ActionResult =
  | { success: true; postId: string }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };

export async function createPost(formData: FormData): Promise<ActionResult> {
  const parsed = CreatePostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
    published: formData.get('published') === 'on',
  });

  if (!parsed.success) {
    return {
      success: false,
      error: 'Validation failed',
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const post = await db.post.create({ data: parsed.data });
    revalidatePath('/posts');
    return { success: true, postId: post.id };
  } catch {
    return { success: false, error: 'Failed to create post' };
  }
}

---

## Dynamic Metadata

import type { Metadata } from 'next';

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: https://example.com/posts/,
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

---

## Caching DB Queries (unstable_cache)

import { unstable_cache } from 'next/cache';

const getCachedUser = unstable_cache(
  async (id: string) => db.user.findById(id),
  ['user'],         // cache key parts
  {
    revalidate: 300,  // 5 minutes
    tags: ['user'],   // allows revalidateTag('user') invalidation
  }
);

---

## Route Handler with Auth

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const RequestSchema = z.object({
  name: z.string().min(1),
});

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const parsed = RequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid request', details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const result = await doSomething(parsed.data);
  return NextResponse.json(result, { status: 201 });
}

---

## Middleware Pattern

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'],
};
