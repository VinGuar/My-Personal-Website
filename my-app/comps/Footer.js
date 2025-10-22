import styles from "../comps/Footer.module.css"

const Footer = () => {
    return ( 
        <div className={styles.whole}>
            <div className={styles.emailpart}>
                <a style={{alignSelf:"center", textDecoration:"none"}} href="mailto:vincentguarnieri1@gmail.com">
                    <p className={styles.footerpara}>Email me!</p>
                </a>
                <p className={styles.footerline} style={{alignSelf:"center"}}></p>
                <a style={{alignSelf:"center", color:"rgb(220,220,220)"}} href="mailto:vincentguarnieri1@gmail.com">
                    <p className={styles.footerpara} style={{borderBottom:"none"}}>vincentguarnieri1@gmail.com</p>
                </a>
            </div>

            <div className={styles.iconfootersecs}>              
              <a href="https://github.com/VinGuar?tab=repositories" target="_blank" rel="noopener noreferrer">
                <div className={styles.iconfooter} style={{
                  width: "65px",
                  height: "65px",
                  background: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: 'black',
                  opacity: "0.85"
                }}>
                  GH
                </div>
              </a>
              <a href="https://www.linkedin.com/in/vincent-guarnieri-5343a8278/" target="_blank" rel="noopener noreferrer">
                <div className={styles.iconfooter} style={{
                  width: "53px",
                  height: "53px",
                  background: '#0077B5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: 'white',
                  opacity: "0.68"
                }}>
                  in
                </div>
              </a>
            </div>

        </div>
     );
}
 
export default Footer;