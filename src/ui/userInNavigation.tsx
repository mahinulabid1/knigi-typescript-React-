import styles from "./css/userInNavigation.module.css";
import SignIn from "./module.ui/userInNavigation.SignInForm";
import UserData from "./module.ui/userInNavigation.UserData";
import { CookiesProvider, useCookies } from "react-cookie";
import {useState} from "react";

const UserInNavigation = ({display, setDisplay }) => {
    // const [isLoggedIn, setIsLoggedIn, removeIsLoggedIn] = useCookies(['isLoggedIn']);
    const clickHandler = () => {
        setDisplay('d-none');
    }
    return(
        <>
        {/* CONDITIONAL RENDERING: TWO COMPONENTS */}
        <div className = { styles.container + " " +  display}>
            {/* check if user logged in */}
            {/* {isLoggedIn === true ? <UserData /> : <SignIn />} */}
            <button onClick= {clickHandler}>Close</button>
            <SignIn />
            

        </div>
        </>
    )
}

export default UserInNavigation;