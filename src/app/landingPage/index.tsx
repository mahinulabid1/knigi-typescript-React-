import Navigation from "@ui/Nav"
import Footer from "@ui/footer"
import BlogPostSummary from "@ui/BlogPostSummary"
import Header from "./module/header"
import AboutUs from "./module/aboutUs"
// import Stories from "../stories/stories" 


export default function Homepage() {

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


