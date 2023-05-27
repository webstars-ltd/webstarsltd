import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const LandingPageBlogs = ({ blok }) => {
    console.log(blok)

    let blog_one = useStaticQuery(graphql`
    query {
      story: allStoryblokEntry(
        filter: { name: { eq: ${blok.blog_one} } }
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

    //   let blog_two = useStaticQuery(graphql`
    //   query {
    //     story: allStoryblokEntry(
    //       filter: { name: { eq: ${blok.blog_two} } }
    //     ) {
    //       edges {
    //         node {
    //           field_component
    //           slug
    //           uuid
    //           id
    //           name
    //           content
    //         }
    //       }
    //     }
    //   }
    // `)

    console.log(blog_one)

    return (
        <div>LandingPageBlogs</div>
    )
}

export default LandingPageBlogs