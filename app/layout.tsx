import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://auradigital-sc.vercel.app'),
  title: {
    default: 'AURADIGITAL – Premier Web Development Agency',
    template: '%s | AURADIGITAL'
  },
  description: 'Architecting premier digital experiences. We craft fast, secure, and scalable web applications for visionary brands and luxury firms.',
  keywords: ['Web Development', 'Next.js Agency', 'Luxury Digital Solutions', 'Scalable Applications', 'AURADIGITAL', 'Premium UX/UI'],
  authors: [{ name: 'Potnuru Santhoshini' }],
  creator: 'AURADIGITAL',
  publisher: 'AURADIGITAL',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://auradigital-sc.vercel.app',
    title: 'AURADIGITAL – Premier Web Development Agency',
    description: 'Architecting premier digital experiences for visionary brands.',
    siteName: 'AURADIGITAL',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AURADIGITAL - Premier Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AURADIGITAL – Premier Web Development Agency',
    description: 'Architecting premier digital experiences for visionary brands.',
    images: ['/og-image.jpg'],
    creator: '@auradigital',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  verification: {
    google: 'google-site-verification-id', // Placeholder - user can update
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AURADIGITAL",
    "image": "https://auradigital-sc.vercel.app/logo.png",
    "@id": "https://auradigital-sc.vercel.app",
    "url": "https://auradigital-sc.vercel.app",
    "telephone": "+918309804089",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Digital Plaza",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.3850,
      "longitude": 78.4867
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://twitter.com/auradigital",
      "https://linkedin.com/company/auradigital"
    ]
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
