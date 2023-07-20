import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useStoryblok } from "../../utils/storyblok"
import GlobalAudience from "../Projects/GlobalAudience"
import EnvelopeSection from "../Projects/EnvelopeSection"

const SimilarProjects = ({ url }) => {
  let storyToSuggest = []
  let storyToSuggestCopyOne
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
    if (
      `projects/${currentStory.node.slug}` !== url &&
      storyToSuggest.length <= 1
    ) {
      storyToSuggest.push(currentStory.node)
    }
  })

  // if (storyToSuggest.length) {
  //   storyToSuggestCopyOne = useStoryblok(storyToSuggest[0])
  // }

  return storyToSuggest.length ? (
    <>
      {storyToSuggestCopyOne.content.body[0]?.project_display[0].component ===
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
  ) : null
}

export default SimilarProjects
