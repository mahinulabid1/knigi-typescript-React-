import { FC } from 'react';
import styles from "./regularPrice.module.css"

interface ComponentProps {
  data: any
}

const RegularPrice: FC<ComponentProps> = ({ data }) => {
  console.log(data);
  return (
    <>
      <span className={styles.regular_price}> {"$" + data.regularPrice + " USD"} </span>
    </>
  )
}

export default RegularPrice;