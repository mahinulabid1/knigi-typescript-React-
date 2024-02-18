import { FC } from 'react';
import styles from "./info.module.css"

const Info: FC = () => {
  return (
    <>
      < div className={styles.container} >
        < h3 className="section-flex-h3" > HEY CREATIVES </ h3 >
        < p className="section-flex-item-p" >
          Here at Knigi we understand and gladly acknowledge that we can’t do everything ourselves.
          We welcome the opportunity to work with fellow creatives, photographers, and film makers.
          As a result, many of the articles and videos here rely heavily on the skills of fellow collaborators.
          If you have an interest in working together or a skill you’d like to offer, please reach out to us.
        </ p >
        < h3 className="section-flex-h3" >GET FAMILIAR </ h3 >
        < p className="section-flex-item-p" >
          Take some time to familiarize yourself with the editorial tone and visual aesthetic of
          Knigi to see if it relates with your own. We would relish the opportunity to establish a
          relationship with you, look at your work, and perhaps collaborate on an article or creative
          experiment of sorts.
        </p>
      </div>
    </>
  )
}

export default Info;