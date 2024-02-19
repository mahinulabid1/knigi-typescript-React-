import { useState, useEffect, FC } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Navigation from "@/ui/nav/Nav"
import Footer from "@/ui/footer/footer"
import styles from "./singleShopItem.module.css"
import HelmetComponent from '@helmet';

const SingleShopItem: FC = () => {
  const [cartAmount, setCartAmount] = useState<number>(1);
  const [data, setData] = useState<any>(''); // setting to any for now! later I'll define class for it 
  const [price, setPrice] = useState<number>();
  let { id } = useParams(); // fetching ID parameter from URL 
  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/shopItem/${id}`)
      .then((result) => {
        let price;
        // axios return an object where "data" field has the database data
        // other data are related to connection information
        const fetchedData = result.data.data.result;
        // console.log(result.data.data.result);
        console.log(fetchedData);
        // console.log(result.data.productPrice.discountedPrice);
        if(fetchedData.productPrice.regularPrice) {
          price = fetchedData.productPrice.regularPrice;
        }
        else {
          price = fetchedData.productPrice.discountedPrice;
        }
        setPrice(price);
        setData(fetchedData);
        
      })
  }, [])

  const increaseAmount = ():void => {
    setCartAmount(cartAmount + 1);
    console.log("increase clicked")
  }

  const decreaseAmount = ():void => {
    if (cartAmount > 0) {
      setCartAmount(cartAmount + 1);
      console.log("decreased click")
    }
  }

  return (
    <>
      <HelmetComponent title={`Knigi - ${data.productTitle}`} />
      <Navigation />
      <div className={"flex flex-wrap bound-navigation flex-s-b " + styles.itemContainer}>

        <div>  {/* flex item 1 */}

          <h2 className={styles.content_header}>
            {data.productTitle}
          </h2>

          <p className={styles.price_tag}>
            {/* { data.productPrice.discountedPrice === undefined ? data.productPrice.regularPrice : data.productPrice.discountedPrice }  */}
            {`$${price} USD`}
          </p>

          <p className={styles.product_content}>
            {data.productAboutInfo}
          </p>

          <div className={styles.cart_option}>
            <p className={styles.cart_note}>*US orders only</p>

            <div className="cart-function">
              <a className={styles.add_cartBtn + " transition"} href="#">ADD TO CART</a>

              <div className={styles.numberFunction}>
                <span className={styles.plus} onClick={():void => { increaseAmount() }}> + </span>
                <span className={styles.minus}>{cartAmount}</span>
                <span className={styles.minus} onClick={():void => { decreaseAmount() }}> - </span>
              </div>

            </div>
          </div>


        </div>

        <div>       {/* flex item 2*/}
          <div className={styles.grey_box}>
            <img src={data.imageCollection.productImage.url} />
          </div>

        </div>

      </div>

      <section>
        <div className={styles.specs_of_books + ' flex flex-wrap flex-s-b bound-navigation'}>

          <div className={styles.specs_item}>
            <h3 className={styles.specs_item_header}>SPECS</h3>
            <p className={styles.specs_content}>{data.productSpecs}</p>
          </div>
          <div className={styles.specs_item}>
            <h3 className={styles.specs_item_header}>SHIPPING &amp; HANDLING</h3>
            <p className={styles.specs_content}>Shipping &amp; handling is added at checkout. For more information please visit our <a href="./FAQ.php" className={styles.info_link}>FAQ</a> and <a href="./termsandCondition.php" className={styles.info_link}>Terms &amp; Conditions.</a></p>
          </div>
        </div>

      </section>

      <Footer />
    </>
  )
}

export default SingleShopItem;