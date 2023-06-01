"use client";
import { Passero_One } from "next/font/google";
import styles from "../comps/Navbar.module.css"
import Link from 'next/link';

const Navbar = () => {

    const handleClick = (num) => {
        console.log('Clicked!');
        if (typeof window !== 'undefined') {
          if (num === 2){
            document.getElementById('body2').scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

    return ( 
            <nav>

            <main className={styles.whole}>
                <div className={styles.menu}>

                    <span className={styles.paren}>&#9790;</span>

                    <Link href="" className = {styles.items}>Home</Link>
                    <div style={{'cursor':'pointer'}} onClick = {() => handleClick(2)} className = {styles.items}>2</div>
                    <div style={{'cursor':'pointer'}} onClick = {() => handleClick(3)} className = {styles.items}>3</div>
                    <div style={{'cursor':'pointer'}} onClick = {() => handleClick(4)} className = {styles.items}>4</div>

                    <span className={styles.paren}>&#9789;</span>

                </div>
            </main>
            </nav>

     );


     
}


 
export default Navbar;