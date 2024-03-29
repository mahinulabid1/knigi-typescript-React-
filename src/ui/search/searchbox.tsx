import { useAppSelector } from "@store/hooks";
import styles from "./searchBox.module.css";
import SearchCloseBtn from "./module/searchCloseButton";

const SearchBox = () => {
  // const props = searchPropsObj.searchProps;
  // const [display, setDisplay ] = props.display;
  // const [animation, setAnimation] = props.animation;

  const display = useAppSelector((state) => state.display.searchDisplay);
  const animation = useAppSelector((state) => state.display.searchAnimation);

  // when user press esc it will close the search box
  const pressESC = () => {
    // IDLE FOR NOW     
  }

  return (
    <>
      {/*  SEARCH ENGINE(just kidding)  */}
      < div className={`${animation} ${display} ${styles.search_display}`} >

        {/* <!-- text container div --> */}
        < div >
          < form action="" >
            <div className="flex flex-wrap flex-s-b">
              <input type="text" placeholder="Search Woven + Hit Enter" />
              <button><img src="/images/icons/search.png" alt="search anything" height="20" width="20" /> </button>
            </div>

            <p className={styles.escBtn}>PRESS <span>[ESC]</span> TO CLOSE</p>
          </form>
        </div>

        {/* close button */}
        <SearchCloseBtn />
      </div>
    </>
  )
}


export default SearchBox;