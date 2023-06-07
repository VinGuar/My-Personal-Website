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

        <section id = "Start" className={styles.top}>
          <p className = {styles.container}>Hello World! I am Vincent Guarnieri.</p>
          <img src="waving4.png" width="400px" height="400px" style={{"margin-top":"0px"}} />
        </section>

        <section id = "About" className={styles.about}>

          <div className={styles.aboutmain}>
            <p className={styles.holder}>About Me!</p>
            <p className={styles.holder}>Email: vincentguarnieri1@gmail.com</p>
            <p className={styles.holder}>Résumé: make button</p>
            <p className={styles.holder}>Github: make button</p>
            <p className={styles.holder}>LinkedIn: make button</p>

          </div>

          <div className={styles.aboutsections}>
            <div className={styles.aboutind} style ={{"background-color": "rgb(250, 228, 255)"}}>    
              <img src="interest.png" className={styles.aboutimgs} />      
              <h1 className={styles.aboutheaders}>Professional Interests</h1>
            </div>
            <div className={styles.aboutind} style ={{"background-color": "rgb(255, 239, 228)"}}>          
              <img src="hobbies.png" className={styles.aboutimgs} />
              <h1 className={styles.aboutheaders}>Hobbies and Passions</h1>
            </div>
            <div className={styles.aboutind} style ={{"background-color": "rgb(241, 255, 228)"}}>          
              <img src="experience.png" className={styles.aboutimgs} />
              <h1 className={styles.aboutheaders} >Skills</h1>
            </div>          
            <div className={styles.aboutind} style ={{"background-color": "rgb(255, 253, 228)"}}>          
              <img src="balance.png" className={styles.aboutimgs} />
              <h1 className={styles.aboutheaders}>Values</h1>
            </div>
          </div>

        </section>

        <section id = "Projects" className={styles.projects}>
          <p className={styles.projectspara}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
        </section>

        <section id = "Experience" className={styles.experience}>
          <p className={styles.experiencepara}>4th</p>
        </section>

        <section id = "Education" className={styles.education}>
          <p className={styles.educationpara}>5th</p>
        </section>


      </div>
      <Footer />

    </main>
  )
}
