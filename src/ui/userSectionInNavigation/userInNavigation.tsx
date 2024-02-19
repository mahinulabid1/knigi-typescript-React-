  import styles from "./userInNavigation.module.css";
  import SignIn from "./module/userInNavigation.SignInForm";
  // import { useCookies } from "react-cookie";
  // import axios from "axios";
  import {  FC, useEffect, useState } from "react";
  import { useAppSelector, useAppDispatch } from "@store/hooks";
  import { setUserNavDisplay } from '@store/displaySlice'
  import UserData from "./module/userInNavigation.UserData";

  const UserInNavigation: FC = () => {

    
    const isUserLoggedIn = useAppSelector((state) => state.user.isDataCached);
    

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

          {isUserLoggedIn ? 
          <UserData/>  :
          <SignIn  />  
          }
          {/* <UserData data={'hello'}/>  */}
          {/* :<SignIn  />  */}

          


        </div>
      </>
    )
  }


  export default UserInNavigation;