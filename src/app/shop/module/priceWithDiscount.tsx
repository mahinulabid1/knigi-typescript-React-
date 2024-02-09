import {FC} from 'react'
import styles from "./priceWithDiscount.module.css";

interface ComponentProps {
  dataOne: any,
  dataTwo: any
}

const PriceWithDisount:FC<ComponentProps> = ( {dataOne, dataTwo} ) => {
    return (
        <>
            <span className = { styles.regular_price_before_discount } > { "$" + dataOne + " USD" } </span>
            <span className = { styles.discounted_price } > { "$" + dataTwo + " USD" } </span> 
        </>
    )
}

export default PriceWithDisount;