import styles from "./stories.module.css";
import Menu from "./module/menu";
import ShopItemList from "./module/storiesItemList";

const Stories = () => {
    return (
        <>
            <section className={styles.their_stories}>
                <h4>THE STORIES</h4>
                <Menu />

                <div key={2} className="flex flex-wrap flex-s-b bound-padding">
                    <ShopItemList />
                </div>

            </section>
        </>
    )
}

export default Stories;