'use client';
import Image from 'next/image'
import styles from '../app/page.module.css'
import '../app/globals.css';
import Link from 'next/link';
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Typewriter from 'typewriter-effect';
import { useEffect, useState, useRef } from "react";

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
                    delay: 85,
                    deleteSpeed: 50,
                    autoStart: true,
                    loop: true,
                    pauseFor: 2500,
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
            <div className={styles.aboutind} style ={{"margin-right": "1px"}}>          
              <img src="detective.png" className={styles.aboutimgs} style={{"border-radius":"41px"}} />
              <h1 className={styles.aboutheaders} >Skills</h1>
              <div className={styles.aboutline}></div>
              <p className={styles.abouttext}>Adipisicing elit irure elit consequat velit sint enim anim consectetur in amet sint. Cillum dolore magna cupidatat adipisicing.    </p>
            </div>          
            <div className={styles.aboutind} id = "2" style ={{"background-color": "rgb(45, 45, 45)", "margin-right": "1px"}}>          
              <img src="desk.png" className={styles.aboutimgs} style={{"border-radius":"0px"}}/>
              <h1 className={styles.aboutheaders}>Professional Interests</h1>
              <div className={styles.aboutline}></div>
              <p className={styles.abouttext}>Adipisicing elit irure elit consequat velit sint enim anim consectetur in amet sint. Cillum dolore magna cupidatat adipisicing.    </p>
            </div>
            <div className={styles.aboutind} id = "3" style ={{"background-color": "rgb(80, 80, 80)", "margin-right": "1px"}}>    
              <img src="hm.png" className={styles.aboutimgs} />      
              <h1 className={styles.aboutheaders}>Why These Interests?</h1>
              <div className={styles.aboutline}></div>
              <p className={styles.abouttext}>Adipisicing elit irure elit consequat velit sint enim anim consectetur in amet sint. Cillum dolore magna cupidatat adipisicing.    </p>
            </div>
          </div>

          <div className={styles.aboutmain}>

            <div className={styles.stick}>
              <h1 className={styles.aboutmainword}>About Me!</h1>

              <a href="https://www.linkedin.com/in/vincent-guarnieri-5343a8278/" style ={{"align-items":"center"}}target="_blank">
                <button  className={styles.buttonresume}>Résumé</button>
              </a>

            </div>

          </div>


          <div className={styles.aboutsections}>
            <div className={styles.aboutind} style ={{}}>    
              <img src="halo.png" className={styles.aboutimgs} style={{"border-radius":"0% 0% 34% 44%"}} />      
              <h1 className={styles.aboutheaders}>Values</h1>
              <div className={styles.aboutline}></div>
              <p className={styles.abouttext}>Adipisicing elit irure elit consequat velit sint enim anim consectetur in amet sint. Cillum dolore magna cupidatat adipisicing.    </p>
            </div>
            <div className={styles.aboutind} style ={{"background-color": "rgb(45, 45, 45)"}}>    
              <img src="ball.png" className={styles.aboutimgs} />      
              <h1 className={styles.aboutheaders}>Hobbies and Passions</h1>
              <div className={styles.aboutline}></div>
              <p className={styles.abouttext}>Adipisicing elit irure elit consequat velit sint enim anim consectetur in amet sint. Cillum dolore magna cupidatat adipisicing.    </p>
            </div>
            <div className={styles.aboutind} style ={{"background-color": "rgb(80, 80, 80)"}}>          
              <img src="drop.png" className={styles.aboutimgs} style={{"border-radius":"0% 0% 34% 3%"}} />
              <h1 className={styles.aboutheaders}>Why Me?</h1>
              <div className={styles.aboutline}></div>
              <p className={styles.abouttext}>Adipisicing elit irure elit consequat velit sint enim anim consectetur in amet sint. Cillum dolore magna cupidatat adipisicing.    </p>
            </div>
          </div>

        </section>

        <section id = "Projects" className={styles.projects}>


          <div clasName={styles.projmain}>
            <h1 className={styles.aboutmainword} style={{"padding-top":"38px", "padding-bottom":"50px", "text-align":"center", "color":"rgb(80, 80, 80)"}}>My Projects</h1>

            <div className={styles.projallsec}>

              <div className={styles.projsecleft} style={{}}>

                <div>
                  <p className={styles.projpara} style={{"border-bottom":"none", "margin-bottom":"-15px", "font-weight":"bold", "font-size":"25px"}}>Fantasy Football Ranker</p>
                  <p className={styles.projpara}>Python program that utilizes neural network machine learning to rank NFL fantasy football players within their respective positions.</p>
                </div>  
                <a href ="https://github.com/VinGuar/Fantasy-Football-Rankings-With-ML" target = "_blank">
                  <button className={styles.buttonproj}>Click Me to View!</button>
                </a>

              </div>

              <div className={styles.projsecright} style={{}}>

                <a href ="https://github.com/VinGuar/NBA-Player-Grader-With-ML" target='_blank'>
                  <button className={styles.buttonproj}>Click Me to View!</button>
                </a>
                <div>
                  <p className={styles.projpara} style={{"border-bottom":"none", "margin-bottom":"-15px", "font-weight":"bold", "font-size":"25px"}}>NBA Player Grader</p>
                  <p className={styles.projpara}>Python program that utilizes ridge regression machine learning to find which NBA stats predict wins best and then uses this to grade current/past NBA players.</p>
                </div>

              </div>

              <div className={styles.projsecleft} style={{}}>

                <div>
                  <p className={styles.projpara} style={{"border-bottom":"none", "margin-bottom":"-15px", "font-weight":"bold", "font-size":"25px"}}>Fantasy Football Ranker</p>
                  <p className={styles.projpara}>Python program that utilizes neural network machine learning to rank NFL fantasy football players within their respective positions.</p>
                </div>  
                <a href ="https://github.com/VinGuar/Fantasy-Football-Rankings-With-ML" target="_blank">
                  <button className={styles.buttonproj}>Click Me to View!</button>
                </a>

              </div>
            </div>

          </div>
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
