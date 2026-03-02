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
  title: "Amr Samy Ramadan — Frontend Engineer",
  description:
    "Frontend Engineer focused on building scalable, accessible web applications with React, Next.js, and TypeScript. Based in Cairo, Egypt.",
};

import { Preloader } from "@/components/ui/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans antialiased">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
