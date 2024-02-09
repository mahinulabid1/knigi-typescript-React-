import { FC } from 'react'
import styles from "./storiesItemList.module.css"
import { StoriesData } from "@lib/dbMockData";

const ShopItemList: FC = () => {
  return (
    <>
      { StoriesData.map((cur: any, index: number) => {
        return (
          <div className={styles.contentCard} key={index}>

            <div className={styles.titleImageSection}>
              <img src={cur.image} alt="stories image" />

              <div>
                <div className={styles.linkContainer}>
                  <a href={cur.storiesLink} className="s-t-link">Read more</a>
                </div>
              </div>
              
            </div>

            <div className={styles.contentText}>
              <h6>{cur.title} <span>{cur.titleSpan}</span></h6>
              <a href="./stories.php">{cur.linkText}</a>
              <p className="s-t-content-para">{cur.para} </p>
              <span className="s-t-content-date">{cur.date}</span>
            </div>

          </div>
        )
      }) }
    </>
  )
}

export default ShopItemList;