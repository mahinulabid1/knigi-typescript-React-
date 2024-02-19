import { FC } from 'react'
import styles from "../main.module.css"
import Navigation from "@/ui/nav/Nav"
import Footer from "@/ui/footer/footer"
import HelmetComponent from '@helmet';

const CreateAccountForm: FC = () => {
  return (
    <>
      <form>
        <input
          type="text"
          key={1} placeholder='First Name'
          name='firstName'
        // onChange ={(event) => { setUsername ( event.target.value ) } }
        />

        <input
          type="text"
          key={2}
          placeholder='Last Name'
          name='lastName'
        // onChange ={(event) => { setUsername ( event.target.value ) } }
        />

        <input
          type="email"
          key={3}
          placeholder='Enter email'
          name="email"
        // onChange ={(event) => { setPassword ( event.target.value ) } }
        />

        <input
          type="text"
          key={4}
          placeholder='Enter your gender'
          name="gender"
        // onChange ={(event) => { setPassword ( event.target.value ) } }
        />

        <input
          type="text"
          key={5}
          placeholder='Enter your username'
          name="username"
        // onChange ={(event) => { setPassword ( event.target.value ) } }
        />

        <input
          type="email"
          key={6}
          placeholder='Enter email'
          name="email"
        // onChange ={(event) => { setPassword ( event.target.value ) } }
        />

        <input
          type="password"
          key={7}
          placeholder='Enter your password'
          name="password"
        // onChange ={(event) => { setPassword ( event.target.value ) } }
        />
      </form>

      <button className={styles.submit + " transition"}>
        Create new Account
      </button>
    </>
  )
}

const CreateAccount: FC = () => {
  return (
    <>
      <HelmetComponent title="Knigi - Sign In & Sign Up" />
      <Navigation />

      <h1 className={styles.heading + ' text-center'}> Sign In </h1>

      {/* Login Form */}
      <div className={styles.formContainer}>

        <CreateAccountForm />{/* combining Component with State */}

        <div className={styles.formExtraLink + ' flex flex-s-b'}>
          <a href="/login">
            Already Have an Account {/* changing form using onClick */}
          </a>
          
          <a href="/forgotpass">Forgot Password</a>
        </div>

      </div>


      <div className={styles.whiteSpaces}></div>

      <Footer />
    </>
  )
}

export default CreateAccount;