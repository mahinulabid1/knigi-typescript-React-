import { FC } from 'react'
import Footer from "@/ui/footer/footer";
import Navigation from "@/ui/nav/Nav";
import styles from "./contactUs.module.css"
import Template from "@template/template";
import Sidebar from "@/ui/sidebar/sideBar";
import Info from "./module/contactInfo";
import HelmetComponent from '@helmet';

const ContactUs: FC = () => {

  return (
    <>
      <HelmetComponent title="Knigi - Contact Us" />
      <Navigation />
      <section>
        <h1 className={styles.section_header}>TELL US YOUR <br /> THOUGHTS</h1>

        <Template
          elements={[
            <Info />,
            <Sidebar />
          ]}
        />

      </section>

      <Footer />
    </>
  )
}


export default ContactUs;