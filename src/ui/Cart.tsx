import {useState, useEffect} from "react";
import styles from "./css/cart.module.css";
import CartCloseBtn from "./module.ui/nav.cart.CloseBtn";


const dataInCart = [
    { title : "Kingi Issue 4" , price: "$ 20 USD" },
    { title : "As You Like It ", price : "$ 15 USD"},
    { title : "Programming ", price : "$ 30 USD"}
]


const Cart = ( { cartPropsObj } ) => {
    const props = cartPropsObj.cartProps; 
    const [display, setDisplay ] = props.display;
    // const [animation, setAnimation] = props.animation;

    return (//"cart-holder d-none"
        <>
            {/*  CART HOLDER  */}
            {/*<!-- d-none className will be here -->*/}
            <div className= { styles.cart_holder + " " + display } > 
                <div className="flex flex-s-b search-box">
                    <div className={styles.cartOverview}>Your Cart <span>$35 USD</span></div>
                    <div className={styles.cartCloseBtn} >
                        <CartCloseBtn setDisplay={setDisplay} />
                    </div>
                </div>

                <div>
                    {/* cart items */}
                    { dataInCart.map( (cur, index ) => {
                        return(
                            <div className={styles.cartItem + " flex flex-align-center flex-s-b"} key={index.toString()}>
                                <div >{cur.title}</div>
                                <div>{cur.price}</div>
                                <div className="flex flex-align-center">
                                    <img src="/images/icons/delete.png" alt="delete from the queue" height="20" width="20" />
                                </div>
                            </div>
                        )
                    }) }
                    
                </div>

                <div className="proceed-to-checkout"><a href="#">CHECKOUT</a></div>

            </div>
        </>
    )
}


export default Cart;