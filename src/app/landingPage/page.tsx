import { FC } from 'react';
import Navigation from "@ui/Nav"
import Footer from "@ui/footer"
import BlogPostSummary from "@ui/BlogPostSummary"
import Header from "./module/header"
import AboutUs from "./module/aboutUs"
import Stories from "../stories/stories" 


const Homepage:FC = () => {
  return (
    <>
      < Navigation />
      < Header />
      < AboutUs />
      < Stories />
      < BlogPostSummary />
      < Footer />
    </>
  )
}

export default Homepage;


