import Image from 'next/image'
import styles from '/styles/page.module.css'
import '/styles/globals.css';
import Link from 'next/link';
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'

export default function Home() {
  return (
    <main>
    <Navbar />

    Read <Link href="/about">this page!</Link>
    <p>hello</p>
    <Footer />

    </main>
  )
}
