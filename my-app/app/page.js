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

        <div id = "About Me" className={styles.about}>

          <div className={styles.aboutmain}>
            <p>About Me!</p>
            <p>Contact:</p>
            <p>Email: vincentguarnieri1@gmail.com</p>
            <p>LinkedIn: Click Here!</p>
          </div>

          <div className={styles.aboutsections}>
            <div className={styles.aboutind}>          
              <p className={styles.aboutpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className={styles.aboutind}>          
              <p className={styles.aboutpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className={styles.aboutind}>          
              <p className={styles.aboutpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>          
            <div className={styles.aboutind}>          
              <p className={styles.aboutpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in cLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumulpa qui officia deserunt mollit anim id est laborum.</p>
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
