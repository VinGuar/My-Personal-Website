"use client";
import { Passero_One } from "next/font/google";
import styles from "../comps/Navbar.module.css"
import Link from 'next/link';

const Navbar = () => {

    const handleClick = (num) => {
        console.log('Clicked!');
        if (typeof window !== 'undefined') {
          if (num === 1){
            document.getElementById('Main').scrollIntoView({ behavior: 'smooth' });
          } else if (num === 2){
            document.getElementById('About Me').scrollIntoView({ behavior: 'smooth' });

          }else if (num === 3){
            document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' });

          }else if (num === 4){
            document.getElementById('Experience').scrollIntoView({ behavior: 'smooth' });

          }else if (num === 5){
            document.getElementById('Education').scrollIntoView({ behavior: 'smooth' });
        }

        }

      };

    return ( 
            <nav>

            <main id="Main" className={styles.whole}>
                <div className={styles.menu}>

                    <span className={styles.paren}>&#9790;</span>

                    <div style={{'cursor':'pointer'}} onClick = {() => handleClick(1)} className = {styles.items}>Home</div>
                    <div style={{'cursor':'pointer'}} onClick = {() => handleClick(2)} className = {styles.items}>About me</div>
                    <div style={{'cursor':'pointer'}} onClick = {() => handleClick(3)} className = {styles.items}>Projects</div>
                    <div style={{'cursor':'pointer'}} onClick = {() => handleClick(4)} className = {styles.items}>Experience</div>
                    <div style={{'cursor':'pointer'}} onClick = {() => handleClick(5)} className = {styles.items}>Education</div>

                    <span className={styles.paren}>&#9789;</span>

                </div>
            </main>
            </nav>

     );


     
}


 
export default Navbar;