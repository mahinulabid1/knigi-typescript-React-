import styles from "./blogsList.module.css";


const AllBlogsPartOneData = [
    {
        title: "MIDDLE OF NOWHERE",
        link: "/allStories",
        para: "Exploring a West Texas must-see, firmly planted at the crossroads of Art and Myth.",
        image: "images/singleStories/stories2.jpg"
    },

    {
        title: "CELINA MUIRE",
        link: "/allStories",
        para: "Austin-based woodworker Celina Muire talks to us about process, pyrography, and the perfectly imperfect nature of making by hand.",
        image: "images/singleStories/stories3.jpg"
    },

    {
        title: "COOKFIRE",
        link: "/allStories",
        para: "A meal out-of-doors in Mt. Hood, OR with two of Portland’s finest foodies.",
        image: "images/singleStories/stories4.jpg"
    },

    {
        title: "LA JUICE SHOP",
        link: "/allStories",
        para: "Thoughts on juicing and the place to go for the best fresh, local, and organic beverages in West Hollywood.",
        image: "images/singleStories/stories5.jpg"
    },
]

const BlogList = () => {

    return (
        <>
            <div className={styles.blogListContainer}>
                {
                    AllBlogsPartOneData.map( (cur, index ) => {
                        return( 
                            <>
                                <div className = {" flex flex-wrap flex-s-a flex-align-center"} key={index}>

                                    <div className = {styles.listSides}>
                                        <a href={cur.link} className = {styles.blogListTitle}>{cur.title}</a>
                                        <p className = "sub-flex-para">{cur.para}</p>
                                        <a href={cur.link} className = {styles.listBtn}>GO ON </a>    
                                    </div>

                                    <div className = {styles.listSides}>
                                        <img className={styles.test} src={cur.image} alt=""/>
                                    </div>
                                </div>

                                <br/> <hr/> <br/>
                            </>
  
                        )
                    })
                }

            </div>
        </>
    )

}

export default BlogList;