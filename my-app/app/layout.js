import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vincent Guarnieri’s Portfolio',
  description: "Welcome to Vincent Guarnieri’s portfolio. He is a passionate programmer, developer, innovator, and lifelong learner who strives to make a positive impact.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}