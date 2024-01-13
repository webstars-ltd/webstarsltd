import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// Project Page components import statements
import MainComponent from "../components/Projects/MainComponent"

import { useStoryblok, StoryBlokApi } from "../utils/storyblok"

const Home = () => {
  const [projects, setProjects] = useState([])

  let { story } = useStaticQuery(graphql`
    query {
      story: storyblokEntry(name: { eq: "Projects" }) {
        full_slug
        name
        uuid
        id
        content
      }
    }
  `)

  const fetchQuery = async () => {
    const {
      data: { stories },
    } = await StoryBlokApi.get("cdn/stories/", {
      starts_with: "projects/",
    })
    const updatedStories = stories.slice(1)

    const sortedStories = updatedStories.sort(
      (a, b) =>
        new Date(b.content.body[0].project_display[0].published_date) -
        new Date(a.content.body[0].project_display[0].published_date)
    )
    console.log(sortedStories)
    setProjects(sortedStories)
  }

  useEffect(() => {
    fetchQuery()
  }, [])

  story = useStoryblok(story)

  return (
    // Main Layout Component
    <Layout>
      <SEO title="Projects" />
      <Navbar />
      {/* Body Component Starts here */}
      <MainComponent blok={story.content} projects={projects} />
      {/* Body Component Ends here */}
      <Footer />
    </Layout>
  )
}

export default Home
