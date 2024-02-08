import Navigation from '../../ui/Nav'
import Stories from "./stories"
import BlogPostSummary from "../../ui/BlogPostSummary"
import Footer from "../../ui/footer"
import styles from "./allStoriesPage.module.css"

const AllStoriesPage = () => {
    return(
        <>
            <Navigation />
            <div className={styles.gapOne}></div>

            <Stories />
            <div className={styles.gapTwo}></div>
            
            <BlogPostSummary />
            <div className={styles.gapTwo}></div>
            <Footer />
        
        </>
    )
}

export default AllStoriesPage;