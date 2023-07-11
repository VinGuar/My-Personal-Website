import styles from "../comps/Footer.module.css"

const Footer = () => {
    return ( 
        <div className={styles.whole}>
            <div className={styles.emailpart}>
                <a style={{"align-self":"center", "text-decoration":"none"}} href="mailto:vincentguarnieri1@gmail.com">
                    <p className={styles.footerpara}>Email me!</p>
                </a>
                <p className={styles.footerline} style={{"align-self":"center"}}></p>
                <a style={{"align-self":"center"}} href="mailto:vincentguarnieri1@gmail.com">
                    <p className={styles.footerpara} style={{"border-bottom":"none"}}>vincentguarnieri1@gmail.com</p>
                </a>
            </div>

            <div className={styles.iconfootersecs}>              
              <a href="https://github.com/VinGuar?tab=repositories" target="_blank">
                <img className={styles.iconfooter} style ={{"width":"65px","opacity":"0.85"}} src="github.png" />
              </a>
              <a href="https://www.linkedin.com/in/vincent-guarnieri-5343a8278/" target="_blank">
                <img  className={styles.iconfooter} style ={{"width": "53px", "opacity":"0.68"}} src="linked.png" />
              </a>
            </div>

        </div>
     );
}
 
export default Footer;