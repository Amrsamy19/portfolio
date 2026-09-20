import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { getCmsData } from "@/lib/cms/api";

export const dynamic = 'force-dynamic';

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amr Samy | Software Engineer",
  description:
    "Software Engineer specializing in React, Next.js, and TypeScript. Building scalable, accessible, and high-performance web applications.",
  keywords: [
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Development",
    "Portfolio",
    "Amr Samy",
    "Cairo",
    "Egypt",
  ],
  authors: [{ name: "Amr Samy" }],
  creator: "Amr Samy",
  metadataBase: new URL("https://amrsamy.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amr Samy | Software Engineer",
    description:
      "Software Engineer focused on building scalable, accessible web applications with React, Next.js, and TypeScript.",
    url: "https://amrsamy.vercel.app",
    siteName: "Amr Samy Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amr Samy | Software Engineer",
    description:
      "Software Engineer focused on building scalable, accessible web applications with React, Next.js, and TypeScript.",
    creator: "@amrsamy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo.png",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cmsData = await getCmsData();
  const theme = cmsData?.theme as Record<string, string> | undefined | null;

  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        {theme && (
          <style>{`
            :root {
              --background: ${theme.background};
              --foreground: ${theme.foreground};
              --muted: ${theme.muted};
              --accent: ${theme.accent};
              --accent-hover: ${theme.accentHover};
              --card: ${theme.card};
              --border: ${theme.border};
            }
          `}</style>
        )}
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Amr Samy",
              url: "https://amrsamy.vercel.app",
              jobTitle: "Software Engineer",
              sameAs: [
                "https://github.com/amrsamy",
                "https://linkedin.com/in/amrsamy",
              ],
              description:
                "Software Engineer focused on building scalable, accessible, and high-performance web applications with React, Next.js, and TypeScript.",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
