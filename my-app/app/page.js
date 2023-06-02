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

        <div id = "Start" className={styles.top}>
          <p className = {styles.container}>Hello World! I am Vincent Guarnieri.</p>
          <img src="waving4.png" width="400px" height="400px" style={{"margin-top":"0px"}} />
        </div>

        <div id = "About" className={styles.about}>

          <div className={styles.aboutmain}>
            <p className={styles.holder}>About Me!</p>
            <p className={styles.holder}>Email: vincentguarnieri1@gmail.com</p>
            <p className={styles.holder}>LinkedIn: Click Here!</p>
          </div>

          <div className={styles.aboutsections}>
            <div className={styles.aboutind}>          
              <p className={styles.aboutpara}>Professional Interests</p>
            </div>
            <div className={styles.aboutind}>          
              <p className={styles.aboutpara}>Hobbies and Passions</p>
            </div>
            <div className={styles.aboutind}>          
              <p className={styles.aboutpara}>Skills</p>
            </div>          
            <div className={styles.aboutind}>          
              <p className={styles.aboutpara}>Values</p>
            </div>
          </div>

        </div>

        <div id = "Projects" className={styles.projects}>
          <p >3rf</p>
        </div>

        <div id = "Experience" className={styles.experience}>
          <p>4th</p>
        </div>

        <div id = "Education" className={styles.education}>
          <p>5th</p>
        </div>


      </div>
      <Footer />

    </main>
  )
}
