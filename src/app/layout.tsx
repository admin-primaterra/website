import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Primaterra | Official Website",
  description: "Official website for the band Primaterra. Music, videos, tour dates, and more.",
    icons: {
    icon: '/icon.png',
  },
};

// Define the RootLayout component with TypeScript types
export default function RootLayout({
  children, // 'children' will be the content of page.tsx, gallery/page.tsx, etc.
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 1. The Navbar goes here, outside of the main page content */}
        <Navbar />
        
        {/* 2. The main page content (Home, Gallery, etc.) */}
        {children}
        
        {/* Optional: Add a Footer component here later */}
      </body>
    </html>
  );
}