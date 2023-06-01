'use client';
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
          <p className = {styles.container}>Hello World! I am Vincent Guarnieri.</p>
          <img src="waving4.png" width="400px" height="400px" style={{"margin-top":"0px"}} />
        </div>

        <div id = "body2" className={styles.body2}>
          <p>second</p>
        </div>

        <div id = "body3" className={styles.body2}>
          <p>3rf</p>
        </div>

        <div id = "body4" className={styles.body2}>
          <p>4th</p>
        </div>

      </div>
      <Footer />

    </main>
  )
}
