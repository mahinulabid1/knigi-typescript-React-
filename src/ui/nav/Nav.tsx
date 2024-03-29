import { FC } from "react"
import HamNavigation from "../hamNavigation/HamNavigation"
import ShopNavigation from "../shopNav/shopNavigation"
import SearchBox from "../search/searchbox"
import Cart from "../cart/Cart"
import UserInNavigation from "../userSectionInNavigation/userInNavigation"
import CacheUser from "../../app/cacheUserInfo/userInfoCache"

import HamBarButton from "./module/hamBarButton"
import ShopButton from "./module/shopButton"
import UserButton from "./module/userButton"
import SearchButton from "./module/searchButton"
import CartButton from "./module/cartButton"
import styles from "./nav.module.css";


const Navigation: FC = () => {

  return (
    <>
      <CacheUser />
      <nav className={`bound-navigation flex flex-s-b flex-align-center ${styles.nav}`}>

        <div className="flex" key={1}>
          <HamBarButton />
          <ShopButton />
        </div>

        <div key={2}>
          <a title="Home Page" className={styles.navLogo} href="/"> Knigi </a>
        </div>

        <div className="flex flex-s-b" key={3}>
          <UserButton />
          <SearchButton />
          <CartButton />
        </div>

      </nav>

      {/* HIDDEN COMPONENTS, WILL BE RENDERED BASED ON CONDITION */}
      <HamNavigation />
      <ShopNavigation />
      <SearchBox />
      <Cart />
      <UserInNavigation />
    </>
  )
}

export default Navigation;