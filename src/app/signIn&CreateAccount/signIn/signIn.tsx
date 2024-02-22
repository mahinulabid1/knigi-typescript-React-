import { FC } from 'react';
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


        <input
          type="password"
          key={2}
          placeholder='Enter the password'
          onChange={(event): void => { 
            dispatch(setSignInPassword(event.target.value)) 
          }}
        />

      </form>

      <button className={styles.submit + " transition"}>Sign In</button>

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