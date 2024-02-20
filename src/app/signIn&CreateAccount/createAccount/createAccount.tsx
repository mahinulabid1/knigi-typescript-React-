import { FC } from 'react'
import styles from "../main.module.css"
import Navigation from "@/ui/nav/Nav"
import Footer from "@/ui/footer/footer"
import HelmetComponent from '@helmet';

import CreateAccountForm from './module/createAccountForm';




const CreateAccount: FC = () => {
  return (
    <>
      <HelmetComponent title="Knigi - Sign In & Sign Up" />
      <Navigation />
      <h1 className={styles.heading + ' text-center'}> Sign In </h1>

      <div className={styles.formContainer}>

        <CreateAccountForm />
        <div className={styles.formExtraLink + ' flex flex-s-b'}>
          <a href="/login">
            Already Have an Account
          </a>

          <a href="/forgotpass">
            Forgot Password
          </a>

        </div>
      </div>

      <div className={styles.whiteSpaces}></div>
      <Footer />
    </>
  )
}

export default CreateAccount;