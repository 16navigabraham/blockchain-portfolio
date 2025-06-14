import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adebanjo Abraham | Blockchain Developer',
  description: 'Adebanjo Abraham - Blockchain & Web3 Developer. Coding is logical.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Adebanjo Abraham | Blockchain Developer</title>
        <meta name="description" content="Adebanjo Abraham - Blockchain & Web3 Developer. Coding is logical." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adebanjo-abraham.vercel.app/" />
        <meta property="og:title" content="Adebanjo Abraham | Blockchain Developer" />
        <meta property="og:description" content="Coding is logical" />
        <meta property="og:image" content="https://adebanjo-abraham.vercel.app/cat.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://adebanjo-abraham.vercel.app/" />
        <meta name="twitter:title" content="Adebanjo Abraham | Blockchain Developer" />
        <meta name="twitter:description" content="Coding is logical" />
        <meta name="twitter:image" content="https://adebanjo-abraham.vercel.app/cat.png" />

        <link rel="icon" type="image/png" href="/cat.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
