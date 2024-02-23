import { FC, useEffect } from "react"
import styles from "./invalidRouteScreen.module.css"
import { useNavigate } from "react-router-dom"


const InvalidRoute: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(()=>{
      navigate('/')
    }, 4000 ) 
  }, [])

  return (
    <>
      <section className={styles.container}>
        <h1>404</h1>
        <p>I'm afraid you've visited a page that doesn't exist on Knigi! 🫤</p>
        <p>Redirecting to HOMEPAGE</p>
      </section>

    </>
  )
}

export default InvalidRoute;