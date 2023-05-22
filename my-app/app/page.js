import Image from 'next/image'
import styles from '../app/page.module.css'
import '../app/globals.css';
import Link from 'next/link';
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'


export default function Home() {
  return (
    <main>
    <Navbar />

    Read <Link href="/about">this page!</Link>
    <p className = {styles.container}>hello</p>
    <Footer />

    </main>
  )
}
