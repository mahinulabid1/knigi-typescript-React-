import {FC} from 'react'
import styles from "./header.module.css"

const Header:FC = () => {
    return(
        <>
            <header className={styles.header}>
                <div className = {"hero-text-container " + styles.heroTextContainer}>
                    <h1 className = "hero-header">future - past</h1>
                    <a className = "hero-link transition" href="./productDescription.php">CHECK IT OUT</a>
                </div>
                <div className = {styles.heroTextCorner + " " + styles.wholeSaleText} >WHOLE SALE AVAILABLE</div>
                <div className = {styles.heroTextCorner} >SHIPS WORLDWIDE</div>
            </header>
        </>
    )
}

export default Header;