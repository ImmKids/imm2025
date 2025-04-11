import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Jersey_10 } from 'next/font/google'
import { Roboto } from 'next/font/google'
import { Jaro } from 'next/font/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jersey = Jersey_10({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jersey',
})

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const jaro = Jaro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jaro',
})

export const metadata: Metadata = {
  title: "IMM Grad Show 2025",
  description: "Sheridan IMM | Graduate Showcase 2025",
  openGraph: {
    title: "IMM Grad Show 2025",
    description: "IMM Graduate Showcase of Creative Interactive Digital Work.",
    url: "https://dev.sheridanimm.com",
    type: "website",
    images: [""] // i jsut dont know the path for the cover img
  },
  twitter: {
    card: "summary_large_image",
    site: "sheridanimm.com",
    creator: "@sheridanimm",
    title: "IMM Graduate Showcase 2025",
    description: "IMM Graduage Showcase of Creative Interactive Digital Work",
    images: [""] // same here
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased ${jersey.variable} ${roboto.variable} ${jaro.variable}`}>
      <body className="flex flex-col min-h-screen">
        {/* <Header /> */}
        <main className="flex-grow">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
