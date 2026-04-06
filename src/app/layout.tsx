import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { PostHogProvider } from "./providers";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Anastasios Krikonis | Senior Software Engineer",
  description:
    "Senior Software Engineer with 7+ years building production-grade web & mobile apps in Fintech & IoT. React, React Native, Node.js, TypeScript. 13+ years of professional experience.",
  keywords: [
    "Senior Software Engineer",
    "React",
    "React Native",
    "NextJS",
    "TypeScript",
    "Node.js",
    "Full Stack Developer",
    "Mobile Developer",
    "Fintech",
    "IoT",
    "Amsterdam",
    "Netherlands",
  ],
  openGraph: {
    title: "Anastasios Krikonis | Senior Software Engineer",
    description:
      "Senior Software Engineer with 7+ years building production-grade web & mobile apps. Driving revenue growth through technical excellence in Fintech & IoT.",
    type: "website",
    siteName: "Anastasios Krikonis Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anastasios Krikonis | Senior Software Engineer",
    description:
      "7+ years building production-grade web & mobile apps. React, React Native, Node.js, TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} antialiased`}
    >
      <body>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
