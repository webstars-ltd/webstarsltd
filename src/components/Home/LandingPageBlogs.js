import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const LandingPageBlogs = ({ blok }) => {
    console.log(blok)

    let { story } = useStaticQuery(graphql`
    query {
      story: allStoryblokEntry(
        filter: { name: { eq: "To Gate or Not to Gate?" } }
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

    console.log(story)

    return (
        <div>LandingPageBlogs</div>
    )
}

export default LandingPageBlogs