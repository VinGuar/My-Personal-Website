import styles from "../comps/Navbar.module.css"
import Link from 'next/link';

const Navbar = () => {

    return ( 
        <nav>
            

            <main className={styles.whole}>
                <div className={styles.left}>
                    <h1  className={styles.head} >Pages!</h1>
                </div>
                <div className={styles.menu}>
                    <Link href="" className = {styles.items}>Home</Link>
                    <Link href = "/about" className = {styles.items}>About</Link>
                </div>
            </main>
           
        </nav>
     );
}



 
export default Navbar;