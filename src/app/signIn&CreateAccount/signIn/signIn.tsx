import { useState, FC } from 'react';
import Navigation from "@/ui/nav/Nav"
import Footer from "@/ui/footer/footer"
import styles from "../main.module.css"
import HelmetComponent from '@helmet';

// const [formState, setFormState] = useState('signin');

// sign in form component
const SignIn: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <form>
        <input
          type="text"
          key={1}
          placeholder='Enter your Username'
          onChange={(event): void => { setUsername(event.target.value) }}
        />

        <input
          type="password"
          key={2}
          placeholder='Enter the password'
          onChange={(event): void => { setPassword(event.target.value) }}
        />

      </form>

      <button className={styles.submit + " transition"}>Sign In</button>

    </>
  )
}



// MAIN mother component
const SignInComponent = () => {

  return (
    <>
      <HelmetComponent title="Knigi - Sign In & Sign Up" />
      <Navigation />

      <h1 className={styles.heading + ' text-center'}> Sign In </h1>

      {/* Login Form */}
      <div className={styles.formContainer}>

        <SignIn />{/* combining Component with State */}

        <div className={styles.formExtraLink + ' flex flex-s-b'}>
          <a href="/createAccount">
            Create Account {/* changing form using onClick */}
          </a>
          <a href="/forgotpass">Forgot Password</a>
        </div>

      </div>


      <div className={styles.whiteSpaces}></div>

      <Footer />
    </>
  )
}


export default SignInComponent  ;