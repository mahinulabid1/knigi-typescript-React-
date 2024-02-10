import { useAppSelector } from "@store/hooks";
import { useState, useEffect, FC } from "react";
import axios from "axios"
import styles from "./shopNavigation.module.css";
// import { useParams } from "react-router-dom";
import ShopNavigationClose from "./module/shopCloseButton";
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

const ShopNavigation:FC = () => {


  const shopNavDisplay = useAppSelector((state) => state.display.shopDisplay)
  const shopNavAnimation = useAppSelector((state) => state.display.shopAnimation);
  

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/shoplist?limit=4')
      .then((res) => {
        setData(res.data);
      })
  }, [])          // [] if it is empty, it will execute the firsttime it mounts

  return (
    <>
      {/* <!-- SHOP NAVIGATION MENU --> */}
      <div className={`${shopNavDisplay} ${shopNavAnimation} ${styles.book_shop_separate}`}  >

        <div className={"flex flex-wrap flex-s-a " + styles.container}>
          {data.map((cur: any, index: number) => {
            return (
              <a href={'/shopItemDetails/' + cur._id} className="b-s-item" key={index.toString()}>

                <div className={styles.image_container}>

                  <img className="" src={cur.productImage} alt="" />

                  <div>
                    <p>{cur.productTitle}</p>
                    <p>
                      <span className="discounted-regular-price" ><s> {cur.productPrice.regularPriceBeforeDiscount !== undefined ? "$" + cur.productPrice.regularPriceBeforeDiscount : ""} </s></span>
                      <span className="discounted-price" > {cur.productPrice.discountedPrice !== undefined ? "$" + cur.productPrice.discountedPrice : ""} </span>
                      <span className="regular-price" > {cur.productPrice.regularPrice !== undefined ? "$" + cur.productPrice.regularPrice : ""} </span>
                    </p>
                  </div>

                </div>
              </a>

            )
          })}

        </div>

        <a className={"transition " + styles.shop_all_btn} href="./shopall.php">
          SHOP ALL
          <i style={{ paddingLeft: "20px" }} className="fas fa-chevron-right"></i>
        </a>

        <ShopNavigationClose />
      </div>
    </>
  )
}

export default ShopNavigation;