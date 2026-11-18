import type { Metadata, Viewport } from 'next'
import { LANDING_PAGE_CONTENT } from '@/constants/landing-page'
import './globals.css'

export const metadata: Metadata = {
  title: LANDING_PAGE_CONTENT.seo.title,
  description: LANDING_PAGE_CONTENT.seo.description,
  openGraph: LANDING_PAGE_CONTENT.seo.openGraph,
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className="bg-[#09090b] text-zinc-100 antialiased selection:bg-[var(--brand-purple)] selection:text-[#09090b]">
        {children}
        {process.env.NODE_ENV === 'production'}
      </body>
    </html>
  )
}