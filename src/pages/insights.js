import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// Page level import statements
import MainComponent from "../components/Insights/MainComponent"
import { useStoryblok, StoryBlokApi } from "../utils/storyblok"

const Insights = () => {
  let { story } = useStaticQuery(graphql`
    query {
      story: storyblokEntry(name: { eq: "Insights" }) {
        full_slug
        name
        uuid
        id
        content
      }
    }
  `)

  story = useStoryblok(story)
  const [insights, setInsights] = useState([])

  const fetchQuery = async () => {
    const {
      data: { stories },
    } = await StoryBlokApi.get("cdn/stories/", {
      starts_with: "insights/",
    })

    setInsights(stories.slice(1))
  }

  useEffect(() => {
    fetchQuery()
  }, [])

  return (
    // Main Layout Component
    <Layout>
      <SEO title="Insights" />
      <Navbar />
      {/* Body Component Starts here */}
      <MainComponent
        blok={story.content}
        showMore={insights}
        setInsights={setInsights}
      />
      {/* Body Component Ends here */}
      <Footer />
    </Layout>
  )
}

export default Insights
