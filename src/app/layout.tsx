import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
