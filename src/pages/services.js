import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// Page level import statements
import MainComponent from "../components/Services/MainComponent"
import { useStoryblok, StoryBlokApi } from "../utils/storyblok"

const Services = () => {
  let { story } = useStaticQuery(graphql`
    query {
      story: storyblokEntry(name: { eq: "Services" }) {
        full_slug
        name
        uuid
        id
        content
      }
    }
  `)

  story = useStoryblok(story)
  const [services, setServices] = useState([])

  const fetchQuery = async () => {
    const {
      data: { stories },
    } = await StoryBlokApi.get("cdn/stories/", {
      starts_with: "services/",
      per_page: 100,
    })

    const updatedStories = stories.slice(1)

    const filteredData = updatedStories.filter(story => {
      if (
        story.content &&
        story.content.body &&
        Array.isArray(story.content.body) &&
        story.content.body.some(item => {
          return (
            item.component === "service_display" &&
            item.services &&
            Array.isArray(item.services) &&
            item.services.some(service => service.hidden !== "true")
          )
        })
      ) {
        return true
      }
      return false
    })

    const sortedStories = filteredData.sort(
      (a, b) =>
        new Date(b.content.body[3].date) - new Date(a.content.body[3].date)
    )

    setServices(sortedStories)
  }

  useEffect(() => {
    fetchQuery()
  }, [])

  return (
    // Main Layout Component
    <Layout>
      <SEO title="Services" />
      <Navbar />
      {/* Body Component Starts here */}
      <MainComponent blok={story.content} services={services} />
      {/* Body Component Ends here */}
      <Footer />
    </Layout>
  )
}

export default Services
