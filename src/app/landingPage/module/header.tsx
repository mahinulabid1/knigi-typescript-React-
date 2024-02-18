import { FC } from 'react';
import styles from "./header.module.css"

const Header: FC = () => {
  return (
    <>
      < header >
        < div className={styles.header_image_container + " flex flex-cen"} >
          < img src="images/headerImg1.jpg" alt="books" />
          < img src="images/headerImg2.jpg" alt="books" />
          < img src="images/headerImg3.jpg" alt="books" />
        </ div >

        < div className={styles.hero_text_container} >
          < h1 > Buy Books, Anywhere </ h1 >
          < a href="/shopall"> Shop Now </ a >
        </ div >

      </ header >
    </>
  )
}


export default Header;