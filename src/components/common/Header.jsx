import { Link } from "react-router"
import styles from "./Header.module.css"

function Header() {

  return (

    <header className={styles.header}>
        
        <h1 className= {styles.headerNameplate}> <b> My Blog </b> </h1>

        <ul className={styles.bodyHeaderNavBar}>

            <li>

                <Link to="/" className={styles.navBarLink}> 
                    
                    <div className= {styles.navBarButton}>

                        <span> Home </span>

                    </div>
                
                </Link>

            </li>

            <li>

                <Link to="/blogpostpage" className={styles.navBarLink}> 
                    
                    <div className= {styles.navBarButton}>

                        <span> Posts </span>

                    </div>
                
                </Link>

            </li>

            <li>

                <Link to="/Contact" className={styles.navBarLink}> 
                    
                    <div className= {styles.navBarButton}>

                        <span> Contact </span>

                    </div>
                
                </Link>

            </li>

        </ul>

    </header>
  
    )

}

export default Header