import { FC } from 'react'
import styles from "./AllBlogs.module.css"
import AllBlogsPartOne from "./module/blogsList"
import Navigation from '@ui/Nav'
import Footer from "@ui/footer"
import Sidebar from "@ui/sideBar"
import Template from "@template/template"
import HelmetComponent from '@helmet'


const AllBlogs: FC = () => {
  return (
    <>
      <HelmetComponent title="Knigi-Blog" />

      <Navigation />
      <section className={styles.blogSection}>

        <h3 className={"text-center " + styles.blogSectionHeading}>THE BLOG</h3>
        <Template
          elements={[
            <AllBlogsPartOne />,
            <Sidebar />
          ]}
        />

        <div className="page-counter-all-blogs">
          <div className="page-counter-center-container center-horizontally">
            <div className="page-counter-total-pages"> PAGE 1 OF 1</div>
            <div className="current-page-page-counter">1</div>
          </div>

        </div>

      </section>

      <Footer />
    </>
  )
}

export default AllBlogs;