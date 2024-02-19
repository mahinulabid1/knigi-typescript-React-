import {FC} from 'react';
import styles from "../userInNavigation.module.css"

const SignIn:FC = () => {
  return (
    <>
      <div>
        <h3 className={styles.notLoggedInHeading}>You are not logged in!</h3>
        <a href='/login' className={styles.signInAndSignOutBtn}>Go to Sign In/Sign Up</a>
      </div>
    </>
  )
}

export default SignIn;