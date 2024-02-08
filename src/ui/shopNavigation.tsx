import { useState, useEffect } from "react";
import { closeFunc } from  "../data&functions/dataAndFunctions";
import axios from "axios"
import styles from "./css/shopNavigation.module.css";
import { useParams } from "react-router-dom";
import ShopNavigationClose from "./module.ui/nav.shop.CloseBtn";

const ShopNavigation = ( {shopPropsObj} ) => {
    const shopProps = shopPropsObj.shopProps;
    const [display, setDisplay ] = shopProps.display;
    const [animation, setAnimation] = shopProps.animation;
    const closeValidation = shopProps.shopCloseValidation;

    const [data, setData] = useState([]);
    useEffect( () => {
        axios.get('http://localhost:8000/api/v1/shoplist?limit=4')
        .then( ( res ) => {
            setData(res.data);
        })
    }, [])          // [] if it is empty, it will execute the firsttime it mounts

    return (
        <>
            {/* <!-- SHOP NAVIGATION MENU --> */}
            <div className={ display + " " + animation + " " + styles.book_shop_separate } >

                <div className={ "flex flex-wrap flex-s-a " + styles.container }>
                    {
                        data.map( ( cur, index ) => {
                            return (
                                <a href ={'/shopItemDetails/' + cur._id} className="b-s-item" key={index.toString()}>

                                    <div className={styles.image_container}>

                                        <img className="" src={cur.productImage} alt="" />

                                        <div>
                                            <p>{cur.productTitle}</p>
                                            <p>
                                                <span className = "discounted-regular-price" ><s> {cur.productPrice.regularPriceBeforeDiscount !== undefined ? "$" + cur.productPrice.regularPriceBeforeDiscount : ""  } </s></span>
                                                <span className = "discounted-price" > {cur.productPrice.discountedPrice !== undefined ? "$" + cur.productPrice.discountedPrice : ""} </span> 
                                                <span className = "regular-price" > {cur.productPrice.regularPrice !== undefined ? "$" + cur.productPrice.regularPrice : ""} </span>
                                            </p>
                                        </div>

                                    </div>
                                </a>

                            )
                        })
                    }

                </div>

                <a className={"transition " + styles.shop_all_btn} href="./shopall.php">
                    SHOP ALL 
                    <i style={{ paddingLeft: "20px" }} className="fas fa-chevron-right"></i>
                </a>

                <ShopNavigationClose 
                    setAnimation = {setAnimation} 
                    setDisplay={setDisplay} 
                    closeValidation = {closeValidation}
                />

            </div>

        </>
    )
}

export default ShopNavigation;