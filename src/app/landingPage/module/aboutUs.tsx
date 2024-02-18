import { FC } from 'react';
import styles from "./aboutUs.module.css";

const AboutUs:FC = () => {
  return (
    <>
      < section className={"flex flex-wrap "} >
        < div className={styles.about_us_item} >
          < h1 > design < span > and </ span > travel </ h1 >
        </ div >

        < div className={styles.about_us_item} >
          < h4 > ABOUT US </ h4 >
          < p className="about-us-p" >
            Woven Magazine celebrates artists, designers, and entrepreneurs while exploring the history of design through travel.
          </ p >
        </ div >

      </ section >
    </>
  )
}

export default AboutUs;