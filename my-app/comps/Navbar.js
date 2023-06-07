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
          var currid = "Start";


          if (top >= offset && top < offset + height) {

            if (id==="Start"){
              setClicked1(current => false)
              currid = id;

            } else if (id==="About"){
              setClicked2(current => false)
              currid = id;

            } else if (id==="Projects"){
              setClicked3(current => false)
              currid = id;
            } else if (id==="Experience"){
              setClicked4(current => false)
              currid = id;
            } else if (id==="Education"){
              setClicked5(current => false)
              currid = id;
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
          } else if (num === 2){
            document.getElementById('About').scrollIntoView({ behavior: 'smooth'});

          }else if (num === 3){
            document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' });

          }else if (num === 4){
            document.getElementById('Experience').scrollIntoView({ behavior: 'smooth' });

          }else if (num === 5){
            document.getElementById('Education').scrollIntoView({ behavior: 'smooth' });
        }

        

      };

    return ( 
            <nav>

              <main id="Main" className={styles.whole}>
                  <div className={styles.menu}>

                      <span className={styles.parenleft}>&#9790;</span>

                      <div style={{'cursor':'pointer'}} onClick = {() => handleClick(1)}className = {clicked1 ? styles.display : styles.hide}>Home</div>
                      <div style={{'cursor':'pointer'}} onClick = {() => handleClick(2)} className = {clicked2 ? styles.display : styles.hide}>About!</div>
                      <div style={{'cursor':'pointer'}} onClick = {() => handleClick(3)} className = {clicked3 ? styles.display : styles.hide}>Projects</div>
                      <div style={{'cursor':'pointer'}} onClick = {() => handleClick(4)} className = {clicked4 ? styles.display : styles.hide}>Experience</div>
                      <div style={{'cursor':'pointer'}} onClick = {() => handleClick(5)} className = {clicked5 ? styles.display : styles.hide}>Education</div>

                      <span className={styles.parenright}>&#9789;</span>

                  </div>
              </main>
            </nav>

     );


     
}


 
export default Navbar;