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
      <div className={styles.whole}>
        <div className={styles.body1}>
          <p className = {styles.container}>hello</p>
        </div>
        <div className={styles.body2}>
          <p>second</p>
        </div>
      </div>
      <Footer />

    </main>
  )
}
