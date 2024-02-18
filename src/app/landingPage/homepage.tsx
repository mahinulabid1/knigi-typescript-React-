import { FC } from 'react';
import Navigation from "@/ui/nav/Nav"
import Footer from "@/ui/footer/footer"
import BlogPostSummary from "@/ui/blogPostSummary/BlogPostSummary"
import Header from "./module/header"
import AboutUs from "./module/aboutUs"
import Stories from "../stories/stories" 
import HelmetComponent from '@helmet';


const Homepage:FC = () => {
  return (
    <>
      <HelmetComponent title="Knigi - Home" />
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


