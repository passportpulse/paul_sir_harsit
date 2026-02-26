import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PaulNavbar from "@/components/PaulNavbar";
import PaulFooter from "@/components/PaulFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PAUL SIR'S CLASSES - Commerce Excellence Since 25 Years",
  description: "Premier commerce coaching institute offering ICSE, ISC, CBSE, B.Com, BBA, MBA, CA, CMA, and CS courses with 25 years of excellence in education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <PaulNavbar />
        <main className="flex-grow mt-20">
          {children}
        </main>
        <PaulFooter />
      </body>
    </html>
  );
}
