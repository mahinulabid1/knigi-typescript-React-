import { FC, useEffect, useState } from 'react';
import Navigation from "@/ui/nav/Nav"
import Footer from "@/ui/footer/footer"
import styles from "../main.module.css"
import HelmetComponent from '@helmet';
import { useAppSelector } from '@store/hooks';
import { useNavigate } from 'react-router-dom';
import {useCookies} from 'react-cookie'
// import { useCookies } from 'react-cookie'
// import {
//   setSignInPassword,
//   setSignInUsername,
// } from "@store/userFormInputSlice";
// import axios from "axios"
import Form from './module/signInForm';
// import LoadingScreen from '@/ui/loadingScreen/redirectAfterLoginSuccess/loadingScreen';
// const [formState, setFormState] = useState('signin');


const SignInComponent:FC = () => {
  const navigate = useNavigate();
  const username = useAppSelector((state) => state.input.signInUsername);
  const password = useAppSelector((state) => state.input.signInPassword);

  // state for handling the loading bar after successful login
  const [loadingMessage, setLoadingMessage] = useState<string>("Hold On! Loading.....");
  const [loadingDisplay, setLoadingDisplay] = useState<string>('');

  const [cookie] = useCookies(['token']);
  
  // check if client already logged in
  useEffect(() => {
    console.log(cookie.token)
    if(cookie.token !== undefined) {
      navigate('/alreadyLoggedIn')
    }
  }, [])


  

  return (
    <>
      <HelmetComponent title="Knigi - Sign In & Sign Up" />
      <Navigation />

      <h1 className={styles.heading + ' text-center'}> Sign In </h1>

      {/* Login Form */}
      <div className={styles.formContainer}>
        <Form />

        <div className={styles.formExtraLink + ' flex flex-s-b'}>
          <a href="/createAccount">
            Create Account
          </a>
          <a href="/forgotpass">Forgot Password</a>
        </div>
      </div>

      <div className={styles.whiteSpaces}></div>
      <Footer />


      <br/>
      DEV MODE: <br/>
      username:{username} <br/>
      password: {password} <br/>
    </>
  )
}


export default SignInComponent  ;