import styles from "./css/footer.module.css"

const Footer = () => {
    return (
        <>
            <footer className={"bound-padding flex flex-s-a " + styles.footer }>
                <div><a href="./contactus">Contact Us</a> </div>
                <div><a href="/requestinterview">Request an Interview</a> </div>
                <div><a href="/faq">FAQ</a> </div>
                <div><a href="/termsandcondition">Terms & Conditions</a> </div>
                <div className={styles.copyright_text}>© Knigi 2023</div>
            </footer>
        </>
    )
}

export default Footer;