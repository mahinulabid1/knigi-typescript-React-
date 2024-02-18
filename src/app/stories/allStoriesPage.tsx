import { FC } from 'react'
import Navigation from '@/ui/nav/Nav'
import Stories from "./stories"
import BlogPostSummary from "@/ui/blogPostSummary/BlogPostSummary"
import Footer from "@/ui/footer/footer"
import styles from "./allStoriesPage.module.css"
import HelmetComponent from '@helmet'

const AllStoriesPage: FC = () => {
  return (
    <>
      <HelmetComponent title="Knigi - All Stories" />
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