import styles from "./shopItemList.module.css"
import RegularPrice from "./regularPrice"
import PriceWithDisount from "./priceWithDiscount"

const ShopItemList = ( {data} ) => {
    /*
    Important Message for learning purpose
    =======================================
    -why did I create this seperate component?
    1. Sending request using AXIOS is asyncronous.
    2. Getting data from API takes time.
    3. If the component gets rendered before API-data-fetching completes,
       then it will thorw error since I'm trying to render a data that's undefined
    4. This component will only render if API-data-fetching process completes.
    */


    return (
        <>

            { data.map( ( cur,index ) => {

                return(
                    <a href = { "/shopItemDetails/" + cur._id } className = { styles.product_link } key = { index.toString() } >

                        < div className = { styles.image_grey_box } >
                            <img className = "center-middle" src = { cur.productImage } alt = "" />
                        </div>

                        <div className = { styles.product_text }>
                            <p className = { styles.product_name }> { cur.productTitle } </p>

                            <p className = { styles.product_price }>
                                { 
                                    cur.productPrice.discountedPrice === undefined ? 
                                    <RegularPrice data={cur.productPrice.regularPrice} /> 
                                    : 
                                    <PriceWithDisount dataOne = {cur.productPrice.regularPriceBeforeDiscount} dataTwo = { cur.productPrice.discountedPrice } />
                                }
                            </p>
                        </div>
                    </a>
                )

            }) } {/* Ending of { } */}


        </>
    ) 
}

export default ShopItemList;
