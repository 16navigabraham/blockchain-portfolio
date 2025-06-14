import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Adebanjo Abraham" />
        <meta property="og:description" content="coding is logical" />
        <meta property="og:image" content="https://adebanjo-abraham.vercel.app/cat.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adebanjo-abraham.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Adebanjo Abraham" />
        <meta name="twitter:description" content="coding is logical" />
        <meta name="twitter:image" content="https://adebanjo-abraham.vercel.app/cat.png" />
        <link rel="icon" type="image/png" href="/cat.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
