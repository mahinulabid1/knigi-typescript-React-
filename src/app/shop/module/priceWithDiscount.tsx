import styles from "./priceWithDiscount.module.css";

const PriceWithDisount = ( {dataOne, dataTwo} ) => {
    return (
        <>
            <span className = { styles.regular_price_before_discount } > { "$" + dataOne + " USD" } </span>
            <span className = { styles.discounted_price } > { "$" + dataTwo + " USD" } </span> 
        </>
    )
}

export default PriceWithDisount;