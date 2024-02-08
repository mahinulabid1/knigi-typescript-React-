import styles from "./menu.module.css";

const Menu = () => {
    return(
        <>
            <div key={1} className={"bound-padding flex flex-s-b " + styles.menu_container}>
                <div className="their-stories-menu">
                    {/* <!-- empty div --> */}
                </div>

                <div className="flex flex-s-b">
                    <a href="./films.php" title="see films about these books">
                        SEE FILMS
                    </a>

                    <a href="./allStories.php" title="View all the stories">
                        SEE ALL STORIES
                    </a>
                </div>
            </div>
    </>
    )
}

export default Menu;