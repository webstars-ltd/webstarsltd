import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import BlogListComponent from './BlogListComponent'

const LandingPageBlogs = ({ blok }) => {
  let { insights } = useStaticQuery(graphql`
    query {
      insights: allStoryblokEntry(
        filter: { field_component: { eq: "Single Insight" } }
      ) {
        edges {
          node {
            field_component
            slug
            uuid
            id
            name
            content
          }
        }
      }
    }
  `)


  const filteredBlogs = insights.edges.filter((insight) => insight.node.name === blok.blog_one || insight.node.name === blok.blog_two)

  console.log(filteredBlogs)

  return <>
  {filteredBlogs.map((originalStory, index) => (
    <BlogListComponent story={originalStory.node} key={index} />
  ))}
</>
}

export default LandingPageBlogs