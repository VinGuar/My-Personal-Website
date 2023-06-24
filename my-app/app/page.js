'use client';
import Image from 'next/image'
import styles from '../app/page.module.css'
import '../app/globals.css';
import Link from 'next/link';
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Typewriter from 'typewriter-effect';

export default function Home() {

  
  return (
    <main>
      <Navbar />
      <div className={styles.whole}>

        <section id = "Start" className={styles.top}>
          <div className={styles.container}>
            <div className = {styles.hello}>
              <Typewriter clasName = {styles.hello}
                  options={{
                    strings: ['Hello World!', '¡Hola Mundo!', 'नमस्ते दुनिया!', '你好世界!'],
                    delay: 100,
                    deleteSpeed: 100,
                    autoStart: true,
                    loop: true,
                    pauseFor: 3000,
                    cursorClassName: styles.cursor
                  }}
              />
            </div>
            <p className = {styles.vincent}>I am Vincent Guarnieri.</p>
            <div className={styles.icons}>              
              <a href="https://github.com/VinGuar?tab=repositories" target="_blank">
                <img className={styles.iconind} style ={{"width":"65px","opacity":"0.73"}} src="github.png" />
              </a>
              <a href="https://www.linkedin.com/in/vincent-guarnieri-5343a8278/" target="_blank">
                <img  className={styles.iconind} style ={{"width": "53px", "opacity":"0.63"}} src="linked.png" />
              </a>
            </div>
          </div>
          <img src="waving4.png" width="400px" height="400px" style={{"margin-top":"0px"}} />
        
        </section>

        <section id = "About" className={styles.about}>



          <div className={styles.aboutsections}>
            <div className={styles.aboutind} style ={{"background-color": "rgb(238, 252, 232)", "margin-right": "1px"}}>          
              <img src="experience.png" className={styles.aboutimgs} />
              <h1 className={styles.aboutheaders} >Skills</h1>
            </div>          
            <div className={styles.aboutind} style ={{"background-color": "rgb(252, 251, 232)", "margin-right": "1px"}}>          
              <img src="balance.png" className={styles.aboutimgs} />
              <h1 className={styles.aboutheaders}>Professional Interests</h1>
            </div>
            <div className={styles.aboutind} style ={{"background-color": "rgb(248, 240, 249)", "margin-right": "1px"}}>    
              <img src="interest.png" className={styles.aboutimgs} />      
              <h1 className={styles.aboutheaders}>Why These Interests?</h1>
            </div>
          </div>

          <div className={styles.aboutmain}>

            <div className={styles.stick}>
              <h1 className={styles.aboutmainword}>About Me!</h1>
              <p className={styles.email}>Email: vincentguarnieri1@gmail.com</p>

              <a href="https://www.linkedin.com/in/vincent-guarnieri-5343a8278/" style ={{"align-items":"center"}}target="_blank">
                <button  className={styles.buttonresume}>Résumé</button>
              </a>

            </div>

          </div>


          <div className={styles.aboutsections}>
            <div className={styles.aboutind} style ={{"background-color": "rgb(238, 252, 232)"}}>    
              <img src="interest.png" className={styles.aboutimgs} />      
              <h1 className={styles.aboutheaders}>Values</h1>
            </div>
            <div className={styles.aboutind} style ={{"background-color": "rgb(252, 251, 232)"}}>    
              <img src="interest.png" className={styles.aboutimgs} />      
              <h1 className={styles.aboutheaders}>Hobbies and Passions</h1>
            </div>
            <div className={styles.aboutind} style ={{"background-color": "rgb(248, 240, 249)"}}>          
              <img src="hobbies.png" className={styles.aboutimgs} />
              <h1 className={styles.aboutheaders}>Why Me?</h1>
            </div>
          </div>

        </section>

        <section id = "Projects" className={styles.projects}>
          <p className={styles.projectspara}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          Lorem ipsum is placeholder t  ext commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
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
