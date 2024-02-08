import Footer from "../../ui/footer";
import Navigation from "../../ui/Nav";
import styles from "./contactUs.module.css"
import Template from "../../template/template";
import Sidebar from "../../ui/sideBar";
import Info from "./module/contactInfo";

const ContactUs = ( ) => {

    return (
        <>      
            <Navigation />
            <section>
                <h1 className={styles.section_header}>TELL US YOUR <br /> THOUGHTS</h1>

                <Template 
                    elements={[
                        <Info/>,
                        <Sidebar />
                    ]}
                />

            </section>
            
            <Footer />
        </>
    )
}


export default ContactUs;