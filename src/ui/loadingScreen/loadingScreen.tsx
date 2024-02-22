import { FC } from 'react'
import styles from "./loadingScreen.module.css"

interface ComponentProps {
  message: string
}

const LoadingScreen: FC<ComponentProps> = ({ message }) => {
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

export default LoadingScreen;