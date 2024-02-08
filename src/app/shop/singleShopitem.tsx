import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Navigation from "../../ui/Nav"
import Footer from "../../ui/footer"
import styles from "./singleShopItem.module.css"

const SingleShopItem = ( ) => {
    const [ cartAmount, setCartAmount ] = useState(1);
    const [data, setData] = useState('');
    const [price, setPrice ] = useState();
    let { id } = useParams(); // fetching ID parameter from URL 
    useEffect( () => {
        axios.get(`http://localhost:8000/api/v1/shoplist?id=${id}`)
        .then( (result) =>{
            // axios return an object where "data" field has the database data
            // other data are related to connection information
            console.log(result.data.productPrice.discountedPrice); 
            let x = result.data.productPrice.discountedPrice; 
            setPrice(x);
            setData(result.data); 

        })
    }, [])

    const increaseAmount = ( ) => {
        setCartAmount(cartAmount+1);
        console.log("increase clicked")
    }

    const decreaseAmount = () => {
        if(cartAmount > 0) {
            setCartAmount(cartAmount + 1);
            console.log("decreased click")
        }
    }

    return (
        <>
            <Navigation />
            <div className = { "flex flex-wrap bound-navigation flex-s-b " + styles.itemContainer }>

                <div>  {/* flex item 1 */}
                    
                    <h2 className = { styles.content_header }>
                        {data.productTitle} 
                    </h2>
                        
                    <p className = { styles.price_tag }> 
                        {/* { data.productPrice.discountedPrice === undefined ? data.productPrice.regularPrice : data.productPrice.discountedPrice }  */}
                        {"$" + price + " USD"}
                    </p>

                    <p className = { styles.product_content }>
                        {data.productAboutInfo} 
                    </p>

                    <div className = { styles.cart_option }>
                        <p className = { styles.cart_note }>*US orders only</p>

                        <div className="cart-function">
                            <a className = { styles.add_cartBtn + " transition" } href="#">ADD TO CART</a>

                            <div className = { styles.numberFunction }>
                                <span className = { styles.plus } onClick={() => {increaseAmount()}}>+</span> 
                                <span className = { styles.minus }>{cartAmount}</span>  
                                <span className = { styles.minus } onClick={() => {decreaseAmount()}}>-</span>
                            </div>

                        </div>
                    </div>

                    
                </div>

                <div>       {/* flex item 2*/}
                    <div className = { styles.grey_box }>
                        <img src = { data.productImage } /> 
                    </div>
                    
                </div>

            </div>

            <section>
                <div className={ styles.specs_of_books + ' flex flex-wrap flex-s-b bound-navigation' }>

                    <div className = { styles.specs_item }>
                        <h3 className = { styles.specs_item_header }>SPECS</h3>
                        <p className = { styles.specs_content }>144 pages, offset-printed and perfect bound, full color on uncoated and coated paper. Printed in Germany.</p>
                        <p className = { styles.specs_content }>Dimensions: 8.5 x 11.3 in</p>
                    </div>
                    <div className={ styles.specs_item }>
                        <h3 className={ styles.specs_item_header }>SHIPPING &amp; HANDLING</h3>
                        <p className={ styles.specs_content }>Shipping &amp; handling is added at checkout. For more information please visit our <a href="./FAQ.php" className={ styles.info_link }>FAQ</a> and <a href="./termsandCondition.php" className={ styles.info_link }>Terms &amp; Conditions.</a></p>
                    </div>
                </div>

            </section>

            <Footer />
        </>
    )
}

export default SingleShopItem;