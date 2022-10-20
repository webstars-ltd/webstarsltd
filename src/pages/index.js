import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useStoryblokState } from "gatsby-source-storyblok"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// Home Page components import statements
import MainHome from "../components/Home/MainHome"

const Home = () => {
  // Query for Home Page Data
  let { story } = useStaticQuery(graphql`
    query {
      story: storyblokEntry(name: { eq: "Home" }) {
        full_slug
        name
        uuid
        id
        content
      }
    }
  `)

  story = useStoryblokState(story)

  return (
    // Main Layout Component
    <Layout>
      <SEO
        title="Home"
        description={
          "Webstars are experts in everything digital - from design and development, to strategy and ongoing support, we are a full-service agency here to bring your digital aspirations to life."
        }
      />
      <Navbar />
      {/* Body Component Starts here */}
      <MainHome blok={story.content} />
      {/* Body Component Ends here */}
      <Footer />
    </Layout>
  )
}

export default Home
