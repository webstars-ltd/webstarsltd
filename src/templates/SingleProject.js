import React from "react"
import { graphql } from "gatsby"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// Page level import statements
import MainSingleProject from "../components/SingleProject/MainSingleProject"

import { useStoryblok } from "../utils/storyblok"

const SingleProject = ({ data }) => {
  let story = data.story

  story = useStoryblok(story)

  return (
    <Layout>
      <SEO title="Single Project" />
      <Navbar />
      <MainSingleProject blok={story.content} />
      <Footer />
    </Layout>
  )
}

export default SingleProject

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
