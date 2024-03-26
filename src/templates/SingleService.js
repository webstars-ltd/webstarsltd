import React from "react"
import { graphql } from "gatsby"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// Page level import statements
import ServiceComponent from "../components/SingleService/ServiceComponent"

import { useStoryblok } from "../utils/storyblok"

const SingleService = ({ data }) => {
  let story = data.story

  story = useStoryblok(story)

  return (
    // Main Layout Component
    <Layout>
      <SEO title="Single Services" />
      <Navbar />
      {/* Body Component Starts here */}
      <ServiceComponent blok={story.content} url={story.full_slug} />
      {/* Body Component Ends here */}
      <Footer />
    </Layout>
  )
}

export default SingleService

export const query = graphql`
  query ($slug: String!) {
    story: storyblokEntry(slug: { eq: $slug }) {
      full_slug
      name
      uuid
      id
      content
    }
  }
`
