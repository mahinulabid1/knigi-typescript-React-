import { FC, useState } from 'react';
import Navigation from "@/ui/nav/Nav"
import Footer from "@/ui/footer/footer"
import styles from "../main.module.css"
import HelmetComponent from '@helmet';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  setSignInPassword,
  setSignInUsername,
} from "@store/userFormInputSlice";


// const [formState, setFormState] = useState('signin');

// sign in form component
const Form: FC = () => {
  const dispatch = useAppDispatch()
  const username = useAppSelector((state) => state.input.signInUsername);
  const password = useAppSelector((state) => state.input.signInPassword);
  

  // Error display state
  const [usernameErrDisplay, setUsernameErrDisplay] = useState<string>('d-none');
  const [passErrDisplay, setPassErrDisplay] = useState<string>('d-none');

  const formValidation = ():void => {
    const trimUsername = username.trim();
    const trimPassword = password.trim();

    if(trimUsername === '') {
      setUsernameErrDisplay('');
    }else {
      setUsernameErrDisplay('d-none');
    }

    if(trimPassword === '') {
      setPassErrDisplay('');
    } else {
      setPassErrDisplay('d-none');
    }
  }

  return (
    <>
      <form>
        <input
          type="text"
          key={1}
          placeholder='Enter your Username'
          onChange={(event): void => { 
            dispatch(setSignInUsername(event.target.value)) 
          }}
        />
        <p className={`${styles.errorMessage} ${usernameErrDisplay}`}>Username is missing! 👆</p>

        <input
          type="password"
          key={2}
          placeholder='Enter the password'
          onChange={(event): void => { 
            dispatch(setSignInPassword(event.target.value)) 
          }}
        />
        <p className={`${styles.errorMessage} ${passErrDisplay}`}>Can't login without password 😔</p>

      </form>

      <button 
      className={styles.submit + " transition"}
      onClick = {(event) => {
        event.preventDefault();
        formValidation();
      }}
      >
        Sign In
      </button>

    </>
  )
}



// MAIN mother component
const SignInComponent = () => {
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

      <br/>
      DEV MODE: <br/>
      username:{username} <br/>
      password: {password} <br/>
      <Footer />
    </>
  )
}


export default SignInComponent  ;