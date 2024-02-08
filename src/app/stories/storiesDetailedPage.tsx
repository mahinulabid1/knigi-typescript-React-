import React from 'react'
import styles from "./storiesDetailedPage.module.css"
import Navigation from '../../ui/Nav'
import BlogPostSummary from "../../ui/BlogPostSummary"
import Footer from "../../ui/footer"


const StoriesPage = ( ) => {

    return (
        <>
            < Navigation />

            < section className = { "flex flex-wrap flex-s-b " + styles.storiesSection } >
                
                < div className = { styles.flexItem } >

                    < h1 className = "stories-heading" > Closer to Home </ h1 >

                    < h3 className = "stories-sub-header" > 
                        CRÉ NATURAL BUILDING 
                        < span className = "sub-header-span" >ARCHITECTURE </ span > 
                    </ h3 >

                    < div className = { styles.imageContainer + " flex flex-wrap flex-s-b" } >
                        < img className = {styles.imageStories} src = "./images/singleStories/stories1.jpg" alt = "" key = {1} />
                        < img className = {styles.imageStories} src = "./images/singleStories/stories2.jpg" alt = "" key = {2} />
                        < img className = {styles.imageStories} src = "./images/singleStories/stories3.jpg" alt = "" key = {3} />
                        < img className = {styles.imageStories} src = "./images/singleStories/stories4.jpg" alt = "" key = {4} />
                        < img className = {styles.imageStories} src = "./images/singleStories/stories5.jpg" alt = "" key = {5} />
                        < img className = {styles.imageStories} src = "./images/singleStories/stories6.jpg" alt = "" key = {6} />
                        < img className = {styles.imageStories} src = "./images/singleStories/stories8.jpg" alt = "" key = {7} />
                    </ div >

                </ div >


                < div className = { styles.flexItem } >

                    < div className = { styles.para + " " + styles.firstPara } >
                        What do we really know about the home we live in? The materials
                        and the processes used to make our modern dwellings are often as
                        foreign to us as another language, the structure and parts confusing
                        and meaningless without extensive study and training. But what if
                        there was a kind of home we could almost build ourselves without
                        a construction background or architectural degree? Human beings have
                        in fact built their own dwellings since the dawn of time, from the
                        crudest structures built to keep out only the wind and rain, to our
                        modern fortresses designed to keep out strangers, the elements, even
                        fresh air. In recent years, however, a shift has begun in the world of home building.
                        A resurgence of earthen structures made of straw, clay, sand, and rock now dot colonial-
                        industrialized areas slowly making their way back into our cultural consciousness. In most
                        cases their peculiar, organic curves offer a respite from the now normative sharp right
                        angles and the stories high glass and steel structures connected by concrete highways.
                        Their more ‘natural’ appeal has given natural building a way back into our collective
                        imagination, and ever so quietly, back into our communities.
                    </ div >

                    < div className = { styles.para + " " + styles.secondPara } >
                        As a natural builder, Bryce Ehrecke has been getting his hands dirty mixing and making cob, and working with other natural materials to create all kinds of structures, for the better part of the past 10 years. It was because of natural building and a trip down the West Coast visiting and learning from other natural builders that he met his now wife, photographer Kelly Brown. The two now live in Victoria, BC, but spend part of their year traveling, either teaching at natural building workshops or exploring the American West Coast.
                    </ div >

                    < div className = { styles.para + " " + styles.thirdPara } >
                        < p className = { styles.paraHeading } > What are some of the chief characteristics of a natural building? </ p >
                        Bryce: The key thing is keeping the materials as close to their raw natural forms as possible, and interacting directly with the environment around you. For indigenous cultures around the world, it only made sense to use what you have right in front of you. So it’s about recognizing those materials and developing a vernacular from there, instead of putting something natural through an intensive refining process to make it into something else and then shipping it long distances. Our current system is so complex and energy intensive, but it also deeply disconnects you from those materials. With natural materials, when you decide you want to take out a wall, everything in that wall is somewhat reusable, or compostable at the very least. But when a conventional house gets torn down or renovated, it becomes a jumble of materials that is so difficult to deal with, it all ends up in the landfill to decompose in a toxic way. Disposing of those materials ends up being a cost to all of us, but because we’re so removed from that process, it makes it really easy to do it that way. It’s a cultural problem with how easy it is to disconnect from all of those negative effects of shelter, as well as disconnecting from all of the positive effects of creating your own.
                    </ div >

                    < div className = { styles.para + " " + styles.fourthPara } >
                        < p className = "para-heading" > What sort of human needs do you consider with natural building? </ p >
                        Bryce: Social needs are huge. I think conventional homes are built to be a pretty sterile environment for your social and creative needs. There are plenty of ways to dress up a conventional house, but there’s something so different about a natural wall. In a conventional home you’ve got paints, drywall, vapor barriers, and insulation with all of these fire retardants, and other not so healthy chemicals in them. The industrial building world has also moved more towards building an airtight house, so it relies on all of these extra ventilation systems to make sure you have good indoor air quality. With a natural wall system you have clay in the walls which can absorb and regulate humidity. It can breathe, in a sense.
                    </ div >

                </ div >

            </ section >


            < BlogPostSummary />
            < Footer />
        </>
    )
}


export default StoriesPage;