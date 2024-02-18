import { FC } from "react";
import styles from "./hamNav.module.css";
import HamNavCloseBtn from "./module/hamCloseButton";
import { useAppSelector } from "@store/hooks";

// Minimizing Code: Ham-navigation Links information
const NavLinksInfo = [  
  { link: "/allStories", text: "STORIES" },
  { link: "/films", text: "FILMS" },
  { link: "/shopall", text: "SHOP" },
  { link: "/blog", text: "BLOG" },
  { link: "/contactus", text: "CONTACT US" },
  { link: "/login", text: "LOGIN/CREATE ACCOUNT" }
]

const HamNavigation:FC = () => { 
  const hamDisplay = useAppSelector((state) => state.display.hamDisplay)
  const hamAnimation = useAppSelector((state) => state.display.hamAnimation)

  return (
    <>
      <div className={`${hamDisplay} ${styles.nav_in_ham} ${hamAnimation}`} >

        {/* -- HAM NAVIGATION Container --*/}
        < div className={styles.nav_in_ham_content_container} >

          {/* List of Links in Navigation Bar, [ code minimization ] */}
          {NavLinksInfo.map((cur, index) => {
            return (
              <a href={cur.link} className={styles.ham_link} key={index}>{cur.text} </a>
              // this is accessing an Array, each index contains an Object with Link's information.
            )
          })}


          <a href="./contactUs.php" className={styles.request_interview_btn}>
            REQUEST INTERVIEW
          </a>

          {/* Button for CLOSING hamNavigation */}
          <div className={styles.ham_close_btn} id="close-nav-in-ham">
            <HamNavCloseBtn />
          </div>

        </div>
      </div>
    </>
  );
};

export default HamNavigation;