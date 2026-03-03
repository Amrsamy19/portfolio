import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amr Samy Ramadan | Software Engineer",
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
  authors: [{ name: "Amr Samy Ramadan" }],
  creator: "Amr Samy Ramadan",
  metadataBase: new URL("https://amrsamy.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amr Samy Ramadan | Software Engineer",
    description:
      "Software Engineer focused on building scalable, accessible web applications with React, Next.js, and TypeScript.",
    url: "https://amrsamy.vercel.app",
    siteName: "Amr Samy Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amr Samy Ramadan | Software Engineer",
    description:
      "Software Engineer focused on building scalable, accessible web applications with React, Next.js, and TypeScript.",
    creator: "@amrsamy", // Assuming a handle or leave generic
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Amr Samy Ramadan",
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
