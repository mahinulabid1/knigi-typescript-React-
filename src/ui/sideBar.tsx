import styles from "./css/sideBar.module.css"

const Sidebar = () => {

    return(
        <>
            < div className = {styles.blogSideBar} >
                <h3 className = "section-flex-h3">COLLABORATE WITH US</h3>
                <p className ={styles.sideBarDesc}>
                    We also provide opportunities to collaborate on video, photography, and writing.
                </p>
                <a href="./collaborate.php" className ={styles.sideBarButton}>COLLABORATE</a>
                <h3 className = "section-flex-h3">REQUEST AN INTERVIEW</h3>
                <p className = "section-flex-item-p">
                    Have a story, tattoo, or dwelling, you’d like to share with us, then request an interview.
                </p>
                <a href="./collaborate.html" className ={styles.sideBarButton}>REQUEST AN INTERVIEW</a>
            </div> 
        </>
    )
}

export default Sidebar;