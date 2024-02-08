import styles from "./contactInfo.module.css"

const Info = () => {

    return( 
        <>
            <div className={styles.container}>
                <h3>GENERAL QUESTIONS</h3>

                <p className={styles.contactPara}>
                    For any questions, press inquiries, requests, or comments you may have please
                        contact: <span className={styles.contactHighLight}>HELLO@WOVENMAGAZINE.COM</span> 
                </p>

                <h3>JOIN OUR COMMUNITY</h3>

                <p className={styles.contactPara}>
                    Show Woven some social love. 
                    Like us on <a href="facebook.com" className={styles.contactHighLight}>FACEBOOK</a> , 
                    tweet us on <a href="facebook.com" className={styles.contactHighLight}>TWITTER</a>, 
                    or follow us around on <a href="facebook.com" className={styles.contactHighLight}>INSTAGRAM</a>.
                </p>
            </div>
        </>
    )
}

export default Info;