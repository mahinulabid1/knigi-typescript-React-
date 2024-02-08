import { useState, useEffect } from "react";
import { closeFunc } from  "../data&functions/dataAndFunctions";
import styles from "./css/hamNav.module.css";    //css module
import HamNavCloseBtn from "./module.ui/nav.ham.CloseBtn";


const NavLinksInfo = [  // Minimizing Code: Ham-navigation Links information
    {link : "/allStories" , text : "STORIES"} ,
    {link : "/films" , text : "FILMS"} ,
    {link : "/shopall" , text : "SHOP"} ,
    {link : "/blog" , text : "BLOG"} ,
    {link : "/contactus" , text : "CONTACT US"},
    {link : "/login", text: "LOGIN/CREATE ACCOUNT" }
]

const HamNavigation = ( { hamNavPropsObj } ) => {
    const props = hamNavPropsObj.hamNavProps;
    const [display, setDisplay ] = props.display;
    const [animation, setAnimation] = props.animation;


    return (
        <>
        
        <div className = { display + " " +styles.nav_in_ham + " " + animation } >

            {/* -- HAM NAVIGATION Container --*/}
            < div className = {styles.nav_in_ham_content_container} >

                {/* List of Links in Navigation Bar, [ code minimization ] */}
                { NavLinksInfo.map( (cur,index) => {
                    return(
                        <a href={cur.link} className={styles.ham_link} key={index}>{cur.text} </a>
                        // this is accessing an Array, each index contains an Object with Link's information.
                    )
                }) }

            
                <a href="./contactUs.php" className={styles.request_interview_btn}>
                    REQUEST INTERVIEW
                </a>

                {/* Button for CLOSING hamNavigation */}
                <div  className = {styles.ham_close_btn} id = "close-nav-in-ham">
                    <HamNavCloseBtn 
                        setDisplay={setDisplay} 
                        setAnimation={setAnimation}
                    />
                </div>
                
            </div>
        </div>
        </>
    );
};

export default HamNavigation;