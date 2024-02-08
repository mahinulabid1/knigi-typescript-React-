import styles from "./css/searchBox.module.css";
import SearchCloseBtn from "./module.ui/nav.search.CloseBtn";

const SearchBox = ( { searchPropsObj } ) => {
    const props = searchPropsObj.searchProps;
    const [display, setDisplay ] = props.display;
    const [animation, setAnimation] = props.animation;
    // when user press esc it will close the search box
    const pressESC = () => {
        // IDLE FOR NOW     
    }

    return (
        <>
            {/*  SEARCH ENGINE(just kidding)  */}
            < div className = { animation + " " + display + " " + styles.search_display} >  

                {/* <!-- text container div --> */}
                < div >
                    < form action = "" >
                        <div className="flex flex-wrap flex-s-b">
                            <input type="text" placeholder="Search Woven + Hit Enter"/>
                                <button><img src="/images/icons/search.png" alt="search anything" height="20" width="20"/> </button>
                        </div>

                        <p className={styles.escBtn}>PRESS <span>[ESC]</span> TO CLOSE</p>
                    </form>
                </div>

                {/* close button */}
                {/* {closeButon} */}
                <SearchCloseBtn setDisplay = { setDisplay } setAnimation = { setAnimation } />
            </div>
        </>
    )
}


export default SearchBox;