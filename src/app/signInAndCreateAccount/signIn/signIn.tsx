import { FC } from 'react';
import Navigation from "@/ui/nav/Nav"
import Footer from "@/ui/footer/footer"
import styles from "../main.module.css"
import HelmetComponent from '@helmet';
import { useAppSelector } from '@store/hooks';
// import { useCookies } from 'react-cookie'
// import {
//   setSignInPassword,
//   setSignInUsername,
// } from "@store/userFormInputSlice";
// import axios from "axios"
import Form from './module/signInForm';
// const [formState, setFormState] = useState('signin');


const SignInComponent:FC = () => {
  const username = useAppSelector((state) => state.input.signInUsername);
  const password = useAppSelector((state) => state.input.signInPassword);

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