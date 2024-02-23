import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./loadingScreen.module.css"

interface ComponentProps {
  message: string,
  redirectTo: string
}

const RedirectAfterLoginSuccess: FC<ComponentProps> = ({ message, redirectTo }) => {
  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      navigate(redirectTo);
    }, 5000)
  }, [])


  return (
    <>
      <div className={styles.container}>
        <div className={styles.loadingScreenContainer}>

          <div className={`${styles.lds_ring}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <p className={styles.message}>{message}</p>
        </div>
      </div>

    </>
  )
}

export default RedirectAfterLoginSuccess;