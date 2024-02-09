import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SimilarProjectRendering from "./SimilarProjectRendering"

const SimilarProjects = ({ blok }) => {
  let { story } = useStaticQuery(graphql`
    query {
      story: allStoryblokEntry(
        filter: { field_component: { eq: "SingleProject" } }
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

  if (blok && blok.project_to_suggest) {
    const projectToSuggest = story.edges.filter(
      project => project.node.name === blok.project_to_suggest
    )

    if (projectToSuggest.length)
      return (
        <SimilarProjectRendering suggestedProject={projectToSuggest[0].node} />
      )
  } else return <></>
}

export default SimilarProjects
