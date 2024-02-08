import styles from "./css/blogPostSummary.module.css";
import { BlogPostSummaryData } from "../data&functions/dataAndFunctions";

const BlogPostSummary = () => {
    return (
        <>
            <section className={styles.blogPost}>
                <h3 className="text-center">FEATURED BLOG POSTS</h3>
                <div className="flex flex-wrap flex-cen" key={'212331321241233'}>
                    {
                        BlogPostSummaryData.map( ( cur, index ) => {
                            return(
                                <div className={styles.blogPostItems} key={index}>
                                    <div><img src={cur.images} alt=""/></div>

                                    <div>
                                        <h4> {cur.heading} </h4>
                                        <p> {cur.para} </p>
                                    </div>
                                </div>
                            )
                        })
                    }

                    

                </div>
                <div className={styles.visitBlogBtn} key={'13209472350472394857'}><a href="./allBlogs.php">Visit blog</a></div>
            </section>
        </>
    )
}


export default BlogPostSummary;