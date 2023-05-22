import styles from "../comps/Navbar.module.css"
import Link from 'next/link';

const Navbar = () => {
    return ( 
        <nav>
            <div className={styles.head}>
                <h1>Pages!</h1>
                <div className={styles.area}>
                    <Link href="" className = {styles.items}>Home</Link>
                    <Link href = "/about" className = {styles.items}>About</Link>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;