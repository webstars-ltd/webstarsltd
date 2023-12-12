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
  const [allInsights, setAllInsights] = useState([])

  const fetchQuery = async () => {
    const {
      data: { stories },
    } = await StoryBlokApi.get("cdn/stories/", {
      starts_with: "insights/",
    })

    const updatedStories = stories.slice(1)

    const filteredData = updatedStories.filter(story => {
      if (
        story.content &&
        story.content.body &&
        Array.isArray(story.content.body) &&
        story.content.body.some(item => {
          return (
            item.component === "insight_display" &&
            item.insights &&
            Array.isArray(item.insights) &&
            item.insights.some(insight => insight.hidden !== "true")
          )
        })
      ) {
        return true
      }
      return false
    })

    const sortedStories = stories.sort(
      (a, b) => new Date(b.published_at) - new Date(a.published_at)
    )

    setInsights(sortedStories)
    setAllInsights(sortedStories)
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
        allInsights={allInsights}
      />
      {/* Body Component Ends here */}
      <Footer />
    </Layout>
  )
}

export default Insights
