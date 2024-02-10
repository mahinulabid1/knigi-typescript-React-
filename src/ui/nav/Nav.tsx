import { FC } from "react"
import { useAppDispatch } from "@store/hooks"
import HamNavigation from "../hamNavigation/HamNavigation"
import ShopNavigation from "../shopNav/shopNavigation"
import SearchBox from "../search/searchbox"
import Cart from "../cart/Cart"
import UserInNavigation from "../userSectionInNavigation/userInNavigation"


import {
  setCartDisplay,
  setHamAnimation,
  setHamDisplay,
  setSearchAnimation,
  setSearchDisplay,
  setShopAnimation,
  setShopCloseValidation,
  setShopDisplay,
  setUserNavDisplay,
  setTimeWhenNavOpened
} from '@store/displaySlice'

import style from "./nav.module.css";



const Navigation: FC = () => {
  const dispatch = useAppDispatch() // initialize

  return (
    <>
      <nav className={`bound-navigation flex flex-s-b flex-align-center ${style.nav}`}>

        <div className="flex" key={1}>

          {/* Hambar icon */}
          <img
            src="/images/hambar.png"
            alt="" height="30"
            width="30"
            className={`cursorPointer ${style.ham_button}`}
            onClick={() => {
              dispatch(setHamAnimation('slideDown'))
              dispatch(setHamDisplay(''))
            }}
          />

          {/* shop button */}
          <div onClick={
            (): void => {
              dispatch(setShopAnimation('slideDown'))
              dispatch(setShopDisplay(''))
              dispatch(setTimeWhenNavOpened(Date.now()))
            }}
            className="shop-btn flex cursorPointer"
          >

            SHOP
            <img className={style.shop_btn_image} src="/images/icons/arrowdown.png" alt="" height="20" width="20" />
          </div>
        </div>

        <div key={2}>
          <a title="Home Page" className={style.navLogo} href="/"> Knigi </a>
        </div>


        <div className="flex flex-s-b" key={3}>
          {/* user btn: click to see full user information */}
          <div className={style.userBtn}>
            <div className="cursorPointer" onClick={(): void => { dispatch(setUserNavDisplay('')) }}>
              <img src="./images/userIcon.png" style={{ height: '20px' }} />
            </div>
          </div>

          {/* <!-- search icon  --> */}
          <div className={style.searchIcon + " cursorPointer"}>
            <img
              src="/images/icons/search.png"
              onClick={(): void => {
                dispatch(setSearchAnimation('slideDown'))
                dispatch(setSearchDisplay(''))
              }
              }
              alt="search anything"
              height="20"
              width="20"
            />
          </div>

          <div
            className="cursorPointer"
            onClick={(): void => {
              dispatch(setCartDisplay(''))
            }}
            id="cart-open"
          >

            <img className={style.cartIcon} src="/images/icons/cart.png" alt="Shopping Cart" height="20" width="20" />

          </div>
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