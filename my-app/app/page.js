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
import { useState, useRef, useEffect } from 'react';

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


  {/*js for slideshow*/}
  const [isOn1, setShow1] = useState(false);
  const [isOn2, setShow2] = useState(true);

  const [isOnbt1, setShowbt1] = useState(true);
  const [isOnbt2, setShowbt2] = useState(true);

  const slidesRef = useRef([]);
  const dotsRef = useRef([]);
  const [slideIndex, setSlideIndex] = useState(2);


  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex(slideIndex + n);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = slidesRef.current;
    const dots = dotsRef.current;

    if (n > slides.length) {
      setSlideIndex(slides.length);
      return;
    }

    if (n < 1) {
      setSlideIndex(1);
      return;
    }
    console.log(slideIndex)
      
    setShow1(current => false);
    setShow2(current => false);

    setShowbt2(current => true);
    setShowbt1(current => true);
    

    if (slideIndex==1){
      setShow1(current => true);
      setShowbt1(current => false);
    } else if (slideIndex==2){
      setShow2(current => true);
      setShowbt2(current => false);

    }

  };

  


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

              <motion.div ref={ref1} initial={{opacity:0}} hidden={{rotate: 0, opacity:0}} animate={{ rotate: inView1 ? 0 : 180, opacity: inView1 ? 1 : 0}} transition={{type:"spring", duration: inView1 ? .8 : 0}} className={styles.projsecleft} style={{}} >

                <div>
                  <p className={styles.projpara} style={{"border-bottom":"none", "margin-bottom":"-15px", "font-weight":"bold", "font-size":"25px"}}>Fantasy Football Ranker</p>
                  <p className={styles.projpara}>Python program that utilizes neural network machine learning to rank NFL fantasy football players within their respective positions.</p>
                </div>  
                <a href ="https://github.com/VinGuar/Fantasy-Football-Rankings-With-ML" target = "_blank">
                  <button className={styles.buttonproj}>Click Me to View!</button>
                </a>

              </motion.div>

              <motion.div ref={ref2} initial={{opacity:0}} hidden={{rotate: 0, opacity:0}} animate={{ rotate: inView2 ? 0 : 180, opacity: inView2 ? 1 : 0}} transition={{type:"spring", duration: inView2 ? 0.8 : 0}} className={styles.projsecright} style={{}}>

                <a href ="https://github.com/VinGuar/NBA-Player-Grader-With-ML" target='_blank'>
                  <button className={styles.buttonproj}>Click Me to View!</button>
                </a>
                <div>
                  <p className={styles.projpara} style={{"border-bottom":"none", "margin-bottom":"-15px", "font-weight":"bold", "font-size":"25px"}}>NBA Player Grader</p>
                  <p className={styles.projpara}>Python program that utilizes ridge regression machine learning to find which NBA stats predict wins best and then uses this to grade current/past NBA players.</p>
                </div>

              </motion.div>

              <motion.div ref={ref3} initial={{opacity:0}} hidden={{rotate: 0, opacity:0}} animate={{ rotate: inView3 ? 0 : 180, opacity: inView3 ? 1 : 0}} transition={{type:"spring", duration: inView3 ? 0.8 : 0}} className={styles.projsecleft} style={{}}>

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

          <h1 className={styles.aboutmainword} style={{"padding-top":"80px", "color":"rgb(220,220,220)", "padding-bottom":"25px", "text-align":"center"}}>Experience</h1>

          <div style={{"display":"flex", "justify-content":"center", "padding-top":"0px"}}>
                <span onClick={() => currentSlide(1)} className={isOnbt1 ? styles.dot : styles.activeBt}></span> 
                <span onClick={() => currentSlide(2)} className={isOnbt2 ? styles.dot : styles.activeBt}></span> 
          </div>
          <div className={styles.experiencemain}>
            <div className={styles.arrowsdiv} style={{"margin-right":"70px"}} onClick={() => plusSlides(-1)}>
              <div className={styles.leftarrow}></div>
              <p className={styles.oldnew}>Older</p>
            </div>

            <div className={styles.expsections}>

              

              <div ref={(el) => (slidesRef.current[1] = el)} className={isOn1 ? styles.indexpsec : styles.sechide}>
                <h1 className={styles.expheader}>James River Equipment</h1>
                <h3 style={{"text-align":"center", "margin-top":"-7px", "color":"rgb(150,150,150)"}}>(oldest)</h3>
                <div className={styles.timeline}>
                  <div className={styles.line}>
                  </div>
                  <div style={{"display":"flex", "flex-direction":"column"}}>
                    <div>
                      <h3 className={styles.expminiheaders}>Information Technology Intern</h3>
                      <h5 className={styles.date}>05/22 - 08/22</h5>
                      <p className={styles.exppara}>Information Technology Intern that worked in a team as a help desk for company employees' software and hardware problems.</p>
                    </div>
                  </div>
                </div>           
              </div>
              
              <div ref={(el) => (slidesRef.current[1] = el)} className={isOn2 ? styles.indexpsec : styles.sechide}>
                <h1 className={styles.expheader}>Scribe On Demand</h1>
                <h3 style={{"text-align":"center", "margin-top":"-7px", "color":"rgb(150,150,150)"}}>(newest)</h3>
                <div className={styles.timeline}>
                  <div className={styles.line}></div>
                  <div style={{"display":"flex", "flex-direction":"column"}}>
                    <div>
                      <h3 className={styles.expminiheaders}>Web Developer and Digital Marketer</h3>
                      <h5 className={styles.date}>06/21 - Present</h5>
                      <p className={styles.exppara}>Fully built/developed and designed their website. Helped both Scribe and their clientele with digital marketing and SEO.</p>
                    </div>
                    <div>
                      <h3 className={styles.expminiheaders}>Intern </h3>
                      <h5 className={styles.date}>06/20 - 06/21</h5>
                      <p className={styles.exppara}>Interned with various things like website design, SEO, and digital marketing.</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div className={styles.arrowsdiv} style={{"margin-left":"70px"}} onClick={() => plusSlides(1)}>
              <div className={styles.rightarrow}></div>
              <p className={styles.oldnew}>Newer</p>
            </div>
          </div>  


        </section>

        <section id = "Education" className={styles.education}>
          <h1 className={styles.aboutmainword} style={{"padding-top":"80px", "color":"rgb(40,40,40)", "padding-bottom":"80px", "text-align":"center"}}>Education</h1>
          <div className={styles.timeline} style={{"padding-bottom":"75px"}}>
            <div className={styles.lineeducation}>
            </div>
            <div className={styles.paraboxtime} style={{"padding-right":"0px"}}>
              <div className={styles.educbox}>
                <div className={styles.educationpara}>
                      <h1 className={styles.educminiheaders} style={{"color":"rgb(5, 0, 130)"}}>University Of Virginia</h1>
                      <p className={styles.projpara} style={{"color":"rgb(210, 110, 0)", "border-bottom":"none", "margin-bottom":"0px", "padding-bottom":"20px", "font-weight":"bold", "padding-left": "20px"}}>First-year student at UVA</p>
                      <p className={styles.projpara} style={{"color":"rgb(210, 110, 0)", "border-bottom":"none", "border-color":"rgb(5, 0, 130)", "margin-top":"0px", "padding-left": "20px", "padding-right":"50px"}}> Currently pursuing a Bachelor's degree in Computer Science and a minor in Data Science.</p>
                </div>
                <div>
                <a href="https://www.virginia.edu/" target="_blank">
                    <img src="uva.png" className={styles.schoolpics}></img>
                </a>               
                </div>
              </div>

              <div className={styles.educbox}>
                <div className={styles.educationpara}>
                      <h1 className={styles.educminiheaders} style={{"color":"rgb(5, 0, 130)"}}>Deep Run High School</h1>
                      <h2 style={{"color":"rgb(40, 40, 40)", "font-size":"19px", "font-weight":"bold", "padding-left": "20px"}}>Center for Information Technology</h2>
                      <p className={styles.projpara} style={{"color":"rgb(40, 40, 40)", "padding-left": "20px", "border-bottom":"none", "border-color":"rgb(5, 0, 130)", "margin-top":"0px", "padding-right":"50px"}}> Graduated in 2023 with a focus in Information Technology, was rank 11/492 in my class.</p>
                </div>
                <div>
                <a href="https://teachers.henrico.k12.va.us/deeprun/cit/" target="_blank">
                    <img src="dr.png" className={styles.schoolpics}></img>
                </a>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
      <Footer />

    </main>
  )
}
