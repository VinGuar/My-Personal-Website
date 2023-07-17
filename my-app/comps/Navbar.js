"use client";
import { Passero_One } from "next/font/google";
import styles from "../comps/Navbar.module.css"
import Link from 'next/link';
import { useRouter } from "next/router"
import { useEffect, useState } from "react";



const Navbar = () => {

    const [clicked1, setClicked1] = useState(true);
    const [clicked2, setClicked2] = useState(true);
    const [clicked3, setClicked3] = useState(true);
    const [clicked4, setClicked4] = useState(true);
    const [clicked5, setClicked5] = useState(true);

    useEffect(() => {
      const scroll = () => {
        const sections = document.querySelectorAll("section");

        sections.forEach((section) => {
          const top = window.scrollY;
          const offset = section.offsetTop - 300;
          const height = section.offsetHeight;
          const id = section.getAttribute("id");  


          if (top >= offset && top < offset + height) {

            if (id==="Start"){
              setClicked1(current => false)
            } else if (id==="About"){
              setClicked2(current => false)
            } else if (id==="Projects"){
              setClicked3(current => false)
            } else if (id==="Experience"){
              setClicked4(current => false)
            } else if (id==="Education"){
              setClicked5(current => false)
            }

          } else {

            if (id==="Start"){
              setClicked1(current => true)
            } else if (id==="About"){
              setClicked2(current => true)
            } else if (id==="Projects"){
              setClicked3(current => true)
            } else if (id==="Experience"){
              setClicked4(current => true)
            } else if (id==="Education"){
              setClicked5(current => true)
            }

          }

        });
      };
  
      window.addEventListener("scroll", scroll);
  
      return () => {
        window.removeEventListener("scroll", scroll);
      };
    }, []);
   

    const handleClick = (num) => {
      
        console.log('Clicked!');
          if (num === 1){
            document.getElementById('Start').scrollIntoView({ behavior: 'smooth'});
            setNav(current => true)

          } else if (num === 2){
            document.getElementById('About').scrollIntoView({ behavior: 'smooth'});
            setNav(current => true)


          }else if (num === 3){
            document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' });
            setNav(current => true)


          }else if (num === 4){
            document.getElementById('Experience').scrollIntoView({ behavior: 'smooth' });
            setNav(current => true)


          }else if (num === 5){
            document.getElementById('Education').scrollIntoView({ behavior: 'smooth' });
            setNav(current => true)

        }

        

      };

    const [navClick, setNav] = useState(true);

    
    const navBarClick = () => {
      setNav(current => !navClick)
    }

     
    return ( 
            <nav>

              <main id="Main" className={styles.whole}>
                  <div className={styles.menu}>

                      <span className={styles.parenleft}>&#9790;</span>

                      <div style={{'cursor':'pointer'}} onClick = {() => handleClick(1)} className = {clicked1 ? styles.display : styles.hide}>Home</div>
                      <div style={{'cursor':'pointer'}} onClick = {() => handleClick(2)} className = {clicked2 ? styles.display : styles.hide}>About!</div>
                      <div style={{'cursor':'pointer'}} onClick = {() => handleClick(3)} className = {clicked3 ? styles.display : styles.hide}>Projects</div>
                      <div style={{'cursor':'pointer'}} onClick = {() => handleClick(4)} className = {clicked4 ? styles.display : styles.hide}>Experience</div>
                      <div style={{'cursor':'pointer'}} onClick = {() => handleClick(5)} className = {clicked5 ? styles.display : styles.hide}>Education</div>

                      <span className={styles.parenright}>&#9789;</span>

                  </div>

              </main>

              <div style={{'cursor':'pointer'}} className={navClick ? styles.mobilemenu : styles.navopen}>
                    <div className={navClick ? styles.bars : styles.barsopen} onClick={() => navBarClick()} >
                      <div className={navClick ? styles.bar1 : styles.bar1open}></div>
                      <div className={navClick ? styles.bar2 : styles.bar2open}></div>
                      <div className={navClick ? styles.bar3 : styles.bar3open}></div>
                    </div>
                    <div className={navClick ? styles.hider : styles.secs}>
                      <div style={{'cursor':'pointer'}} onClick = {() => handleClick(1)} className = {clicked1 ? styles.menusmallhead : styles.menusmallheadhide}>Home</div>
                      <div style={{'cursor':'pointer'}} onClick = {() => handleClick(2)} className = {clicked2 ? styles.menusmallhead : styles.menusmallheadhide}>About!</div>
                      <div style={{'cursor':'pointer'}} onClick = {() => handleClick(3)} className = {clicked3 ? styles.menusmallhead : styles.menusmallheadhide}>Projects</div>
                      <div style={{'cursor':'pointer'}} onClick = {() => handleClick(4)} className = {clicked4 ? styles.menusmallhead : styles.menusmallheadhide}>Experience</div>
                      <div style={{'cursor':'pointer'}} onClick = {() => handleClick(5)} className = {clicked5 ? styles.menusmallhead : styles.menusmallheadhide}>Education</div>

                    </div>
              </div>

            </nav>

     );


     
}


 
export default Navbar;