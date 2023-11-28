import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// About Page components import statements
import AboutMain from "../components/About/AboutMain"

import { useStoryblok } from "../utils/storyblok"

const About = () => {
  let { story } = useStaticQuery(graphql`
    query {
      story: storyblokEntry(name: { eq: "About" }) {
        full_slug
        name
        uuid
        id
        content
      }
    }
  `)

  story = useStoryblok(story)

  return (
    // Main Layout Component
    <Layout>
      <SEO title="About" />
      <Navbar />
      <div style={{ marginTop: 140 }}></div>
      {/* Body Component Starts here */}
      <AboutMain blok={story.content} />
      {/* Body Component Ends here */}
      <Footer />
    </Layout>
  )
}

export default About
