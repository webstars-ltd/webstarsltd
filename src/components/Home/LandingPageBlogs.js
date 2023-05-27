import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import DynamicBlogComponent from './DynamicBlogComponent'

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

  console.log(insights)

    return <DynamicBlogComponent  />
}

export default LandingPageBlogs