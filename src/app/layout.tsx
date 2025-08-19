import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Neocarbon - Modern Next.js Application',
  description: 'A modern Next.js application built with TypeScript, Tailwind CSS, and optimized for Vercel deployment.',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  authors: [{ name: 'Neocarbon Team' }],
  creator: 'Neocarbon',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://neocarbon.vercel.app',
    title: 'Neocarbon - Modern Next.js Application',
    description: 'A modern Next.js application built with TypeScript, Tailwind CSS, and optimized for Vercel deployment.',
    siteName: 'Neocarbon',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neocarbon - Modern Next.js Application',
    description: 'A modern Next.js application built with TypeScript, Tailwind CSS, and optimized for Vercel deployment.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
