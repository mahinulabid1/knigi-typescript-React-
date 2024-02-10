import styles from "./css/userInNavigation.module.css";
import SignIn from "../module.ui/userInNavigation.SignInForm";
// import { CookiesProvider, useCookies } from "react-cookie";
import {  FC } from "react";
import { useAppSelector, useAppDispatch } from "@store/hooks";
import { setUserNavDisplay } from '@store/displaySlice'

const UserInNavigation: FC = () => {

  const display = useAppSelector((state) => state.display.userNavDisplay)
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(setUserNavDisplay('d-none'))
  }
  return (
    <>
      {/* CONDITIONAL RENDERING: TWO COMPONENTS */}
      <div className={styles.container + " " + display}>
        {/* check if user logged in */}
        {/* {isLoggedIn === true ? <UserData /> : <SignIn />} */}
        <button onClick={clickHandler}>Close</button>
        <SignIn />


      </div>
    </>
  )
}

export default UserInNavigation;