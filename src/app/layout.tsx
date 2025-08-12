import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "Shadab Ali - B.Tech Computer Science Portfolio",
    description:
        "Interactive portfolio showcasing skills, projects, and achievements in computer science and software development. Built with Next.js and modern web technologies.",
    keywords: "Shadab Ali, B.Tech Computer Science, software developer, portfolio, React, Next.js, projects, achievements",
    authors: [{ name: "Shadab Ali" }],
    creator: "Shadab Ali",
    publisher: "Shadab Ali",
    openGraph: {
        title: "Shadab Ali - B.Tech Computer Science Portfolio",
        description: "Interactive portfolio showcasing skills, projects, and achievements in computer science and software development.",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Shadab Ali - B.Tech Computer Science Portfolio",
        description: "Interactive portfolio showcasing skills, projects, and achievements in computer science and software development.",
    }
}

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body
          suppressHydrationWarning={true}
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
      </ThemeProvider>
      </body>
      </html>
  );
}
