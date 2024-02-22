import {FC} from "react" 
import styles from "./signInAndSignOutProtect.module.css"


const ProtectSignInAndSignOutRoute:FC = () => {
  return(
    <>
      <section className={styles.container}>
        <h1>401</h1>
        <p>Ops! It looks like you're already logged in!</p>
        <p>Redirecting to the main page!</p>
      </section>
    </>
  )
}

export default ProtectSignInAndSignOutRoute;