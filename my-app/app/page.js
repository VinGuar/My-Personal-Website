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
  // InView hooks for animations
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { ref: educationRef, inView: educationInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Experience slideshow state
  const [currentExperience, setCurrentExperience] = useState(5); // Start with most recent (Respondr)
  const totalExperiences = 5;

  const experiences = [
    {
      id: 1,
      company: "James River Equipment",
      role: "Information Technology Intern",
      period: "05/2022 - 08/2022",
      location: "Ashland, VA",
      bullets: [
        "Worked in a team as a help desk for company employees' software and hardware problems",
        "Imaged and set up computers for employees",
        "Completed various tasks like inventory, shipping, organizing, etc."
      ],
      link: "https://www.jamesriverequipment.com/",
      isOldest: true
    },
    {
      id: 2,
      company: "Chuy's",
      role: "Waiter",
      period: "05/2024 - 08/2024",
      location: "Glen Allen, Virginia",
      bullets: [],
      isSimple: true
    },
    {
      id: 3,
      company: "Scribe On Demand",
      role: "Web Developer and Digital Marketer",
      period: "06/2020 - 05/2025",
      location: "Richmond, VA",
      description: "A full-service content marketing agency that builds brands, establishes thought leaders, and creates audiences.",
      bullets: [
        "Built, developed, and designed company website",
        "Helped both Scribe and its clientele with personalized SEO reports",
        "Assisted in identifying relevant content ideas to successfully market both Scribe and its clientele"
      ],
      link: "https://www.scribeondemand.com/"
    },
    {
      id: 4,
      company: "BigStack Poker",
      role: "Co-Founder and CTO",
      period: "04/2025 - Present",
      description: "AI-powered poker coaching platform providing real-time stat tracking, leak detection, and solver-backed feedback. URL: bigstack.io",
      bullets: [
        "Co-founded a data-driven poker startup leveraging AI, stat tracking, and data analysis to deliver personalized coaching",
        "Designed and implemented an AI-powered conversational agent for poker strategy using natural language processing (NLP) and solver-backed analytics",
        "Led end-to-end product development lifecycle (requirements gathering, prototyping, model evaluation, and deployment)"
      ],
      link: "https://bigstack.io"
    },
    {
      id: 5,
      company: "Respondr",
      role: "AI Developer and Data Analyst Intern",
      period: "05/2025 - Present",
      location: "Richmond, VA",
      description: "AI platform that equips schools and organizations with real-time, plan-based crisis and incident response tools.",
      bullets: [
        "Developed a Retrieval-Augmented Generation (RAG) based AI chatbot using LLMs (Large Language Models) for crisis-response automation",
        "Performed data preprocessing, embedding, and vectorization of emergency response plan data, utilizing SQL databases",
        "Collaborated in an Agile/Scrum team to align development milestones with business goals",
        "Asked to continue working part-time through school year and winter break as a result of job performance"
      ],
      isCurrent: true
    }
  ];

  const nextExperience = () => {
    setCurrentExperience((prev) => (prev < totalExperiences ? prev + 1 : 1));
  };

  const prevExperience = () => {
    setCurrentExperience((prev) => (prev > 1 ? prev - 1 : totalExperiences));
  };

  const goToExperience = (index) => {
    setCurrentExperience(index);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.02, y: -8, transition: { duration: 0.3 } }
  };

  return (
    <main className={styles.everything}>
      <Navbar />
      <div className={styles.whole}>

        {/* Hero Section */}
        <section id="Start" className={styles.top}>
          <div className={styles.container}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.hello}
            >
              <Typewriter
                  options={{
                  strings: ['Hello World!', '¡Hola Mundo!', '你好世界!', 'مرحبا بالعالم!'],
                  delay: 100,
                    deleteSpeed: 50,
                    autoStart: true,
                    loop: true,
                    pauseFor: 2500,
                    cursorClassName: styles.cursor
                  }}
              />  
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", textAlign: "center", gap: "0.5rem"}}
            >
              <h1 className={styles.iam}>I am</h1>
              <h1 className={styles.vincent}>Vincent Guarnieri</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={styles.roleTitle}
            >
              Software Engineer & AI Developer
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={styles.icons}
            >              
              <a href="https://github.com/VinGuar?tab=repositories" target="_blank" rel="noopener noreferrer">
                <img alt="GitHub" className={styles.iconind} src="github.png" />
              </a>
              <a href="https://www.linkedin.com/in/vincent-guarnieri-5343a8278/" target="_blank" rel="noopener noreferrer">
                <img alt="LinkedIn" className={styles.iconind} src="linked.png" />
              </a>
              </motion.div>  
            </div>  
        </section>

        {/* About Section */}
        <section id="About" className={styles.about} ref={aboutRef}>
          <div className={styles.aboutmain}>
            <motion.h2 
              className={styles.aboutmainword}
              initial={{ opacity: 0, y: 30 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className={styles.buttonresume}>
                  📄 Download Resume
                </button>
              </a>
            </motion.div>
            </div>

          <motion.div 
            className={styles.aboutsections}
            variants={staggerContainer}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeInUp} whileHover="hover" className={styles.aboutind}>
              <motion.img 
                alt="Skills icon" 
                src="detective.png" 
                className={styles.aboutimgs}
                whileHover={{ rotate: 5, scale: 1.1 }}
              />
              <h3 className={styles.aboutheaders}>Technical Skills</h3>
              <p className={styles.abouttext}>
                Proficient in Python, SQL, RAG AI, NLP, JavaScript, Next.JS, HTML/CSS, Java, Git, Web Development, SEO, SCRUM, and machine learning technologies.
              </p>
            </motion.div>

                        <motion.div variants={fadeInUp} whileHover="hover" className={styles.aboutind}>
              <motion.img 
                alt="Professional experience icon" 
                src="desk.png" 
                className={styles.aboutimgs}
                whileHover={{ rotate: 5, scale: 1.1 }}
              />
              <h3 className={styles.aboutheaders}>Professional Experience</h3>
              <p className={styles.abouttext}>
                Proven track record in software engineering, full-stack development, and product leadership across startups and established companies, with experience in AI integration and modern development practices.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover="hover" className={styles.aboutind}>
              <motion.img 
                alt="Innovation icon" 
                src="hm.png" 
                className={styles.aboutimgs}
                whileHover={{ rotate: 5, scale: 1.1 }}
              />
              <h3 className={styles.aboutheaders}>Innovation & Problem Solving</h3>
              <p className={styles.abouttext}>
                Passionate about creating cutting-edge solutions, building AI systems, and tackling complex technical challenges with creative approaches and modern technologies.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover="hover" className={styles.aboutind}>
              <motion.img 
                alt="Values icon" 
                src="halo.png" 
                className={styles.aboutimgs}
                whileHover={{ rotate: -5, scale: 1.1 }}
              />
              <h3 className={styles.aboutheaders}>Core Values</h3>
              <p className={styles.abouttext}>
                Committed to continuous learning, collaborative teamwork, delivering high-quality solutions, and staying at the forefront of AI and software engineering advances.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover="hover" className={styles.aboutind}>
              <motion.img 
                alt="Personal interests icon" 
                src="ball.png" 
                className={styles.aboutimgs}
                whileHover={{ rotate: -5, scale: 1.1 }}
              />
              <h3 className={styles.aboutheaders}>Personal Interests</h3>
              <p className={styles.abouttext}>
                Outside of work, I enjoy programming, software development, competitive poker, football, cooking, coding personal projects, and exploring artificial intelligence innovations.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover="hover" className={styles.aboutind}>
              <motion.img 
                alt="Why choose me icon" 
                src="drop.png" 
                className={styles.aboutimgs}
                whileHover={{ rotate: -5, scale: 1.1 }}
              />
              <h3 className={styles.aboutheaders}>Why Work With Me?</h3>
              <p className={styles.abouttext}>
                I bring proven experience in AI development, full-stack engineering, and product leadership. I consistently deliver high-quality solutions and excel in collaborative environments while continuously learning cutting-edge technologies.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="Projects" className={styles.projects} ref={projectsRef}>
          <div className={styles.projmain}>
            <motion.h2 
              className={styles.aboutmainword}
              initial={{ opacity: 0, y: 30 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{textAlign: "center", color: "white", paddingBottom: "2rem"}}
            >
              Featured Projects
            </motion.h2>

            <div className={styles.projallsec}>
              <motion.div 
                className={styles.projsecleft}
                initial={{ opacity: 0, x: -50 }}
                animate={projectsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover="hover"
                variants={cardHover}
              >
                <div className={styles.projorder1}>
                  <h3 style={{fontSize: "1.5rem", fontWeight: "700", color: "white", margin: "0 0 0.5rem 0"}}>
                    Fantasy Football Ranker
                  </h3>
                  <p className={styles.projpara}>
                    Python program that uses neural network machine learning (Scikit-learn) to rank NFL fantasy football players within their respective positions. Excluding injuries, has more accurate predictions than main human rankings or other popular computer algorithms.
                  </p>
                </div>  
                <a href="https://github.com/VinGuar/Fantasy-Football-Rankings-With-ML" target="_blank" rel="noopener noreferrer">
                  <button className={styles.buttonproj}>View Project</button>
                </a>
              </motion.div>

              <motion.div 
                className={styles.projsecright}
                initial={{ opacity: 0, x: 50 }}
                animate={projectsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover="hover"
                variants={cardHover}
              >
                <a href="https://www.recipematchmaker.com/" target="_blank" rel="noopener noreferrer">
                  <button className={styles.buttonproj}>Visit Website</button>
                </a>
                <div className={styles.projorder1}>
                  <h3 style={{fontSize: "1.5rem", fontWeight: "700", color: "white", margin: "0 0 0.5rem 0"}}>
                    Recipe Matchmaker Web App
                  </h3>
                  <p className={styles.projpara}>
                    Web application that tailors recipes to individuals' ingredients, prep time, and preferences from almost 200,000 total recipes. Uses a Next.JS frontend and FastAPI backend to handle the data.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.projsecleft}
                initial={{ opacity: 0, x: -50 }}
                animate={projectsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover="hover"
                variants={cardHover}
              >
                <div className={styles.projorder1}>
                  <h3 style={{fontSize: "1.5rem", fontWeight: "700", color: "white", margin: "0 0 0.5rem 0"}}>
                    NBA Player Grader
                  </h3>
                  <p className={styles.projpara}>
                    Python program that uses ridge regression machine learning (Scikit-learn) and feature engineering to find which NBA stats predict wins best and then grades current/past NBA players. Has a very strong correlation between high player grades and high team win totals.
                  </p>
                </div>  
                <a href="https://github.com/VinGuar/NBA-Player-Grader-With-ML" target="_blank" rel="noopener noreferrer">
                  <button className={styles.buttonproj}>View Project</button>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="Experience" className={styles.experience} ref={experienceRef}>
          <motion.h2 
            className={styles.aboutmainword}
            initial={{ opacity: 0, y: 30 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{textAlign: "center", color: "white", paddingBottom: "2rem"}}
          >
            Professional Experience
          </motion.h2>

          <div className={styles.experiencemain}>
            {/* Navigation dots */}
            <div className={styles.dotsmobile}>
              {[1, 2, 3, 4, 5].map((num) => (
                <span 
                  key={num}
                  onClick={() => goToExperience(num)} 
                  className={currentExperience === num ? styles.activeBt : styles.dot}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <div className={styles.centerarrow}>
              <div className={styles.arrowsdiv1} onClick={prevExperience}>
                <div className={styles.leftarrow}></div>
                <p className={styles.oldnew}>Previous</p>
              </div>

              <div className={styles.arrowsdiv2} onClick={nextExperience}>
                <div className={styles.rightarrow}></div>
                <p className={styles.oldnew}>Next</p>
              </div>
            </div>

                        {/* Experience cards */}
            <div className={styles.expsections}>
              {experiences.map((exp) => (
                <motion.div 
                  key={exp.id}
                  className={currentExperience === exp.id ? styles.indexpsec : styles.sechide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {exp.link ? (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                      <h3 className={styles.expheader}>{exp.company}</h3>
                    </a>
                  ) : (
                    <h3 className={styles.expheader}>{exp.company}</h3>
                  )}
                  
                  {exp.isCurrent && (
                    <p style={{textAlign: "center", marginTop: "-0.5rem", color: "#00D4FF", fontSize: "0.9rem"}}>
                      (current position)
                    </p>
                  )}
                  
                  {exp.isOldest && (
                    <p style={{textAlign: "center", marginTop: "-0.5rem", color: "#A0A5B8", fontSize: "0.9rem"}}>
                      (first position)
                    </p>
                  )}

                <div className={styles.timeline}>
                  <div className={styles.line}></div>
                    <div>
                      <h4 className={styles.expminiheaders}>{exp.role}</h4>
                      <p className={styles.date}>
                        {exp.period}
                        {exp.location && (
                          <span style={{color: "#A0A5B8", marginLeft: "0.5rem"}}>• {exp.location}</span>
                        )}
                      </p>
                      
                      {exp.description && (
                        <p className={styles.exppara} style={{fontStyle: "italic", marginBottom: "1rem"}}>
                          {exp.description}
                        </p>
                      )}
                      
                      {exp.isSimple ? null : (
                        <ul style={{
                          listStyleType: "disc", 
                          paddingLeft: "1.5rem", 
                          margin: "0.5rem 0 0 1.5rem",
                          color: "#A0A5B8"
                        }}>
                          {exp.bullets.map((bullet, index) => (
                            <li key={index} style={{
                              marginBottom: "0.5rem",
                              lineHeight: "1.6"
                            }}>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>  
        </section>

        {/* Education Section */}
        <section id="Education" className={styles.education} ref={educationRef}>
          <motion.h2 
            className={styles.aboutmainword}
            initial={{ opacity: 0, y: 30 }}
            animate={educationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{textAlign: "center", color: "white", paddingBottom: "3rem"}}
          >
            Education
          </motion.h2>

          <motion.div 
            className={styles.timeline2}
            initial={{ opacity: 0, y: 30 }}
            animate={educationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.lineeducation}></div>
            <div className={styles.paraboxtime}>
              <motion.div 
                className={styles.educbox}
                whileHover="hover"
                variants={cardHover}
              >
                <div className={styles.educationpara}>
                  <h3 className={styles.educminiheaders}>University of Virginia</h3>
                  <p style={{fontSize: "1.1rem", color: "#FF6B35", fontWeight: "600", margin: "0.5rem 0"}}>
                    Current Student - GPA: 3.7
                  </p>
                  <p className={styles.projpara2}>
                    Pursuing a B.A. in Computer Science and Applied Statistics, expected graduation May 2027. 
                    Focused on AI/ML coursework and software engineering fundamentals.
                  </p>
                </div>
                <a href="https://www.virginia.edu/" target="_blank" rel="noopener noreferrer">
                  <img alt="UVA logo" src="uva.png" className={styles.schoolpics} />
                </a>
              </motion.div>

              <motion.div 
                className={styles.educbox}
                whileHover="hover"
                variants={cardHover}
              >
                <div className={styles.educationpara}>
                  <h3 className={styles.educminiheaders}>Deep Run High School</h3>
                  <p style={{fontSize: "1.1rem", color: "#FF6B35", fontWeight: "600", margin: "0.5rem 0"}}>
                    Center for Information Technology
                  </p>
                  <p className={styles.projpara2}>
                    Graduated in 2023 with a focus in Information Technology. Ranked 11/492 in class with strong academic performance in STEM subjects.
                  </p>
                </div>
                <a href="https://teachers.henrico.k12.va.us/deeprun/cit/" target="_blank" rel="noopener noreferrer">
                  <img alt="Deep Run logo" src="dr.png" className={styles.schoolpics} />
                </a>
              </motion.div>
                </div>
          </motion.div>
        </section>

      </div>
      <Footer />
    </main>
  )
}
