import {FC} from 'react'
import styles from "./template.module.css";

interface ComponentProps {
  elements: any
}

const Template:FC<ComponentProps> = ( {elements} ) => {

    return (
        <>
        <div className="flex">
            <div className={styles.flexItemOne}>
                {elements[0]}
            </div>

            <div className={styles.flexItemTwo}>
                {elements[1]}
            </div>
        </div>
        </>
    )
}

export default Template;