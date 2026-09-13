import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Shadab Ali — Full-Stack Developer & Systems Builder",
  description:
    "Building high-throughput APIs, fault-tolerant distributed interfaces, and modern full-stack web applications.",
  metadataBase: new URL("https://shadab.works"),
  openGraph: {
    title: "Shadab Ali — Full-Stack Developer & Systems Builder",
    description:
      "Building high-throughput APIs, fault-tolerant distributed interfaces, and modern full-stack web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
