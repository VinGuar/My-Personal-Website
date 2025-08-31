import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vincent Guarnieri - Software Engineer & AI Developer',
  description: "Vincent Guarnieri's portfolio. Software Engineer and AI Developer specializing in machine learning, RAG systems, and full-stack development. Currently pursuing B.A. in Computer Science at UVA.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><meta name="google-site-verification" content="uGAmvT1LM4Uc9aTsPls3HfOUU9mDfXGB88Z8NGyBSiE" /></head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}