import styles from "./regularPrice.module.css"

const RegularPrice = ( data ) => {
    console.log(data);
    return (
        <>
            <span className = { styles.regular_price }> {"$" + data.regularPrice + " USD"} </span>
        </>
    )
}

export default RegularPrice;