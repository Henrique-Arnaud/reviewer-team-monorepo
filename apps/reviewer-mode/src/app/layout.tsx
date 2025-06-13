import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/navBar";
import Footer from "./_components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reviewer Mode",
  description: "Review your favorite games here!",
  keywords: ["reviewer mode", "reviewer", "mode", "reviews", "gaming community"],
  authors: [{ name: "Reviewer Mode Team" }],
  robots: "index, follow",
  other: {
    'google-site-verification': 'DsbKXUfZPmW1kDAGZCjPuPsw4nM1vCrzvm8jSnQmmww'
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
