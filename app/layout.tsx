import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import data from "@/public/data.json";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${data.company.name} - ${data.company.tagline}`,
  description: "Premium limousine and luxury car rental services with professional chauffeurs. Available 24/7 for airport transfers, corporate travel, and special events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <Header />

        <main className="min-h-[calc(100vh-200px)]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
