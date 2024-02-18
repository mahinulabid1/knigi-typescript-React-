import { FC } from 'react'
import styles from "./stories.module.css";
import Menu from "./module/menu";
import ShopItemList from "./module/storiesItemList";
// import HelmetComponent from '@helmet';

const Stories: FC = () => {
  return (
    <>
      {/* <HelmetComponent title="Knigi - Stories" /> */}
      <section className={styles.their_stories}>
        <h4>THE STORIES</h4>
        <Menu />

        <div className="flex flex-wrap flex-s-b bound-padding">
          <ShopItemList />
        </div>

      </section>
    </>
  )
}

export default Stories;