import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vincent Guarnieri - AI Developer & Software Engineer',
  description: "Modern portfolio of Vincent Guarnieri - AI Developer, Software Engineer, and Co-Founder specializing in machine learning, RAG systems, NLP, and full-stack development. Currently building innovative AI solutions.",
  keywords: 'Vincent Guarnieri, AI Developer, Software Engineer, Machine Learning, RAG AI, NLP, Full-Stack Development, React, Next.js, Python, JavaScript',
  authors: [{ name: 'Vincent Guarnieri' }],
  creator: 'Vincent Guarnieri',
  publisher: 'Vincent Guarnieri',
  robots: 'index, follow',
  openGraph: {
    title: 'Vincent Guarnieri - AI Developer & Software Engineer',
    description: 'Modern portfolio showcasing AI development, software engineering, and innovative technology solutions.',
    url: 'https://vincentguarnieri.com',
    siteName: 'Vincent Guarnieri Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vincent Guarnieri - AI Developer & Software Engineer',
    description: 'Modern portfolio showcasing AI development, software engineering, and innovative technology solutions.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><meta name="google-site-verification" content="uGAmvT1LM4Uc9aTsPls3HfOUU9mDfXGB88Z8NGyBSiE" /></head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}