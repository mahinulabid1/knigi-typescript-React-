import {useState, useEffect} from 'react'
import axios from 'axios'
import styles from "./shopAll.module.css"
import Navigation from '../../ui/Nav'
import Footer from '../../ui/footer'
import BlogPostSummary from '../../ui/BlogPostSummary'
import Header from './module/header'
import ShopItemList from './module/shopItemList'


const ShopAll = ( ) => {

    const [data, setData] = useState(undefined);
    useEffect( ( ) => {
        axios.get('http://localhost:8000/api/v1/shoplist?limit=20')
        .then((result) => {
            // result.data contains fetched information from Database
            console.log(result.data)
            setData(result.data);
           
        })
    }, [])

    return (
        <>  
            <Navigation />
            <Header />

            <section className = {styles.booksSection}>

                <div className = {styles.categoryNavigation + " flex flex-s-b"}>
                    <div className = "books-nav-item">WOVEN GOODS</div>
                    <div className = "books-nav-item">
                        <span className = "individual-btn category-activated">INDIVIDUAL</span> 
                    </div>
                </div>

                <div className ={"flex flex-wrap flex-s-b bound-navigation " + styles.listContainer} >

                    { data !== undefined ? <ShopItemList data={data}/> : console.log("Data hasn't arrived yet") }

                </div>

            </section>

            <BlogPostSummary />
            <Footer />
        </>
    )
}

export default ShopAll;