import styles from "../comps/Navbar.module.css"
import Link from 'next/link';

const Navbar = () => {

    return ( 
        <nav>
            
            <main className={styles.whole}>
                {/* 
                <div className={styles.left}>
                    <img src="paper.png" alt="Folded Paper icon" width="70" height="60"/>
                </div> 
                 */}
                <div className={styles.menu}>
                    <span className={styles.dot}>&#9790;</span>
                    <Link href="" className = {styles.items}>Home</Link>
                    <Link href = "/about" className = {styles.items}>About</Link>
                    <span className={styles.dot}>&#9789;</span>

                </div>
            </main>
           
        </nav>
     );
}



 
export default Navbar;