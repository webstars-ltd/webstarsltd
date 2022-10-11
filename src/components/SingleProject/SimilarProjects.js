import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useStoryblok } from "../../utils/storyblok"
import GlobalAudience from "../Projects/GlobalAudience"
import EnvelopeSection from "../Projects/EnvelopeSection"

const SimilarProjects = ({ url }) => {
  let storyToSuggest = {}
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

  story.edges.forEach(currentStory => {
    if (`projects/${currentStory.node.slug}` !== url) {
      storyToSuggest = currentStory.node
      return
    }
  })

  storyToSuggest = useStoryblok(storyToSuggest)

  return (
    <div>
      {storyToSuggest.content.body[0]?.project_display[0].component ===
      "Envelope Section" ? (
        <EnvelopeSection
          component={storyToSuggest.content.body[0]?.project_display[0]}
          slug={storyToSuggest.slug}
        />
      ) : (
        <GlobalAudience
          component={storyToSuggest.content.body[0]?.project_display[0]}
          slug={storyToSuggest.slug}
        />
      )}
    </div>
  )
}

export default SimilarProjects
