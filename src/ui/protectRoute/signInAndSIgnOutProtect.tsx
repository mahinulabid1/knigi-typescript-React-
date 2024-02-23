import {FC , useEffect} from "react" 
import styles from "./signInAndSignOutProtect.module.css"
import { useNavigate } from "react-router-dom"


const ProtectSignInAndSignOutRoute:FC = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(() => {
      navigate('/');
    }, 6000)
  }, [])

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