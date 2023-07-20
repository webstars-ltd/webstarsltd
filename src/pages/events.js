import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// // Project Page components import statements
import EventsMain from "../components/Events/EventsMain"

import { useStoryblok } from "../utils/storyblok"

const Events = () => {
  let { story } = useStaticQuery(graphql`
    query {
      story: storyblokEntry(name: { eq: "Events" }) {
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
      <SEO title="Events" />
      <Navbar />
      {/* Body Component Starts here */}
      <EventsMain blok={story.content} />
      {/* Body Component Ends here */}
      <Footer />
    </Layout>
  )
}

export default Events
