'use client';
import { motion } from 'framer-motion';
import Image from 'next/image'
import styles from '../app/page.module.css'
import '../app/globals.css';
import Link from 'next/link';
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Typewriter from 'typewriter-effect';
import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function Home() {


{/* refs and inview for about me seciton*/}
  const { ref: refsec1, inView: inViewsec1 } = useInView({
    threshold: .5
  });

  const { ref: refsec2, inView: inViewsec2 } = useInView({
    threshold: .5
  });

  const { ref: refsec3, inView: inViewsec3 } = useInView({
    threshold: .5
  });

  const { ref: refsec4, inView: inViewsec4 } = useInView({
    threshold: .5
  });

  const { ref: refsec5, inView: inViewsec5 } = useInView({
    threshold: .5
  });

  const { ref: refsec6, inView: inViewsec6 } = useInView({
    threshold: .5
  });




  {/* refs and inview for project seciton*/}
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: .3
  });
  
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: .3
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: .3
  });


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
            <div style ={{"margin-right": "1px", "outline": "1px solid rgb(120, 120, 120)"}}>
              <motion.div ref={refsec1} animate={{opacity: inViewsec1 ? 1 : 0}} transition={{duration: 0.7}} className={styles.aboutind}>          
                <img src="detective.png" className={styles.aboutimgs} style={{"border-radius":"41px"}} />
                <h1 className={styles.aboutheaders} >Skills</h1>
                <div className={styles.aboutline}></div>
                <p className={styles.abouttext}>Adipisicing elit irure elit consequat velit sint enim anim consectetur in amet sint. Cillum dolore magna cupidatat adipisicing.    </p>
              </motion.div>  
            </div>  
            <div style ={{"background-color": "rgb(45, 45, 45)", "margin-right": "1px", "outline": "1px solid rgb(120, 120, 120)"}}>      
              <motion.div ref={refsec2} animate={{opacity: inViewsec2 ? 1 : 0}} transition={{duration: 0.7}} className={styles.aboutind} id = "2" >          
                <img src="desk.png" className={styles.aboutimgs} style={{"border-radius":"0px"}}/>
                <h1 className={styles.aboutheaders}>Professional Interests</h1>
                <div className={styles.aboutline}></div>
                <p className={styles.abouttext}>Adipisicing elit irure elit consequat velit sint enim anim consectetur in amet sint. Cillum dolore magna cupidatat adipisicing.    </p>
              </motion.div>
            </div>
            <div style ={{"background-color": "rgb(80, 80, 80)", "margin-right": "1px", "outline": "1px solid rgb(120, 120, 120)"}}>
              <motion.div ref={refsec3} animate={{opacity: inViewsec3 ? 1 : 0}} transition={{duration: 0.7}} className={styles.aboutind} id = "3">    
                <img src="hm.png" className={styles.aboutimgs} />      
                <h1 className={styles.aboutheaders}>Why These Interests?</h1>
                <div className={styles.aboutline}></div>
                <p className={styles.abouttext}>Adipisicing elit irure elit consequat velit sint enim anim consectetur in amet sint. Cillum dolore magna cupidatat adipisicing.    </p>
              </motion.div>
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
            <div style ={{"outline": "1px solid rgb(120, 120, 120)"}}>      
              <motion.div ref={refsec4} animate={{opacity: inViewsec4 ? 1 : 0}} transition={{duration: 0.7}} className={styles.aboutind}>    
                <img src="halo.png" className={styles.aboutimgs} style={{"border-radius":"0% 0% 34% 44%"}} />      
                <h1 className={styles.aboutheaders}>Values</h1>
                <div className={styles.aboutline}></div>
                <p className={styles.abouttext}>Adipisicing elit irure elit consequat velit sint enim anim consectetur in amet sint. Cillum dolore magna cupidatat adipisicing.    </p>
              </motion.div>
            </div>
            <div style ={{"background-color": "rgb(45, 45, 45)", "outline": "1px solid rgb(120, 120, 120)"}}>      
              <motion.div ref={refsec5} animate={{opacity: inViewsec5 ? 1 : 0}} transition={{duration: 0.7}} className={styles.aboutind} style ={{"background-color": "rgb(45, 45, 45)"}}>    
                <img src="ball.png" className={styles.aboutimgs} />      
                <h1 className={styles.aboutheaders}>Hobbies and Passions</h1>
                <div className={styles.aboutline}></div>
                <p className={styles.abouttext}>Adipisicing elit irure elit consequat velit sint enim anim consectetur in amet sint. Cillum dolore magna cupidatat adipisicing.    </p>
              </motion.div>
            </div>
            <div style ={{"background-color": "rgb(80, 80, 80)", "outline": "1px solid rgb(120, 120, 120)"}}>
              <motion.div ref={refsec6} animate={{opacity: inViewsec6 ? 1 : 0}} transition={{duration: 0.7}} className={styles.aboutind} style ={{"background-color": "rgb(80, 80, 80)"}}>          
                <img src="drop.png" className={styles.aboutimgs} style={{"border-radius":"0% 0% 34% 3%"}} />
                <h1 className={styles.aboutheaders}>Why Me?</h1>
                <div className={styles.aboutline}></div>
                <p className={styles.abouttext}>Adipisicing elit irure elit consequat velit sint enim anim consectetur in amet sint. Cillum dolore magna cupidatat adipisicing.    </p>
              </motion.div>
            </div>
          </div>

        </section>

        <section id = "Projects" className={styles.projects}>


          <div className={styles.projmain}>
            <h1 className={styles.aboutmainword} style={{"padding-top":"38px", "padding-bottom":"50px", "text-align":"center", "color":"rgb(80, 80, 80)"}}>My Projects</h1>

            <div className={styles.projallsec}>

              <motion.div ref={ref1} initial={{opacity:0}} hidden={{rotate: 0}} animate={{ rotate: inView1 ? 0 : 180, opacity: inView1 ? 1 : 1}} transition={{type:"spring", duration: inView1 ? .8 : 0}} className={styles.projsecleft} style={{}} >

                <div>
                  <p className={styles.projpara} style={{"border-bottom":"none", "margin-bottom":"-15px", "font-weight":"bold", "font-size":"25px"}}>Fantasy Football Ranker</p>
                  <p className={styles.projpara}>Python program that utilizes neural network machine learning to rank NFL fantasy football players within their respective positions.</p>
                </div>  
                <a href ="https://github.com/VinGuar/Fantasy-Football-Rankings-With-ML" target = "_blank">
                  <button className={styles.buttonproj}>Click Me to View!</button>
                </a>

              </motion.div>

              <motion.div ref={ref2} initial={{opacity:0}} hidden={{rotate: 0}} animate={{ rotate: inView2 ? 0 : 180, opacity: inView2 ? 1 : 0}} transition={{type:"spring", duration: inView2 ? 0.8 : 0}} className={styles.projsecright} style={{}}>

                <a href ="https://github.com/VinGuar/NBA-Player-Grader-With-ML" target='_blank'>
                  <button className={styles.buttonproj}>Click Me to View!</button>
                </a>
                <div>
                  <p className={styles.projpara} style={{"border-bottom":"none", "margin-bottom":"-15px", "font-weight":"bold", "font-size":"25px"}}>NBA Player Grader</p>
                  <p className={styles.projpara}>Python program that utilizes ridge regression machine learning to find which NBA stats predict wins best and then uses this to grade current/past NBA players.</p>
                </div>

              </motion.div>

              <motion.div ref={ref3} initial={{opacity:0}} hidden={{rotate: 0}} animate={{ rotate: inView3 ? 0 : 180, opacity: inView3 ? 1 : 0}} transition={{type:"spring", duration: inView3 ? 0.8 : 0}} className={styles.projsecleft} style={{}}>

                <div>
                  <p className={styles.projpara} style={{"border-bottom":"none", "margin-bottom":"-15px", "font-weight":"bold", "font-size":"25px"}}>Fantasy Football Ranker</p>
                  <p className={styles.projpara}>Python program that utilizes neural network machine learning to rank NFL fantasy football players within their respective positions.</p>
                </div>  
                <a href ="https://github.com/VinGuar/Fantasy-Football-Rankings-With-ML" target="_blank">
                  <button className={styles.buttonproj}>Click Me to View!</button>
                </a>

              </motion.div>
            </div>

          </div>
        </section>

        <section id = "Experience" className={styles.experience}>
          
          <a className={styles.leftarrow}>❮</a>

          <div className={styles.expsections}>
            <div className={styles.indexpsec}>
              <div>
                <h1 className={styles.expheader}>James River Equipment</h1>
                <p className={styles.exppara}>Elit deserunt sint tempor est qui non mollit qui. Esse commodo quis nisi eiusmod dolore fugiat dolor. Nisi anim nostrud Lorem do esse culpa enim ea. Esse eu veniam adipisicing excepteur velit. Eiusmod fugiat fugiat duis sit non Lorem dolore. Commodo eu ut sunt adipisicing.</p>
              </div>
            </div>
            <div style={{"display":"flex", "justify-content":"center"}}>
              <span className={styles.dot}></span> 
              <span className={styles.dot}></span> 
              <span className={styles.dot}></span> 
            </div>
          </div>

          <a className={styles.rightarrow}>❯</a>


        </section>

        <section id = "Education" className={styles.education}>
          <p className={styles.educationpara}>5th</p>
        </section>


      </div>
      <Footer />

    </main>
  )
}
