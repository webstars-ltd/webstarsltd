import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useStoryblok } from "../../utils/storyblok"
import GlobalAudience from "../Projects/GlobalAudience"
import EnvelopeSection from "../Projects/EnvelopeSection"

const SimilarProjects = ({ blok }) => {
  let storyToSuggestCopyOne = {}
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

  const projectToSuggest = story.edges.filter(
    project => project.node.name === blok.project_to_suggest
  )

  if (projectToSuggest.length) {
    storyToSuggestCopyOne = useStoryblok(projectToSuggest[0].node)
  }

  return (
    <>
      {Object.keys(storyToSuggestCopyOne).length > 0 &&
      storyToSuggestCopyOne.content.body[0]?.project_display[0].component ===
        "Envelope Section" ? (
        <EnvelopeSection
          component={storyToSuggestCopyOne.content.body[0]?.project_display[0]}
          slug={storyToSuggestCopyOne.slug}
        />
      ) : (
        <GlobalAudience
          component={storyToSuggestCopyOne.content.body[0]?.project_display[0]}
          slug={storyToSuggestCopyOne.slug}
        />
      )}
    </>
  )
}

export default SimilarProjects
