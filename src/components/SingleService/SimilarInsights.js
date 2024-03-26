import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useStoryblok } from "../../utils/storyblok"
import InsightLists from "../Insights/InsightLists"

const SimilarInsights = ({ url }) => {
  let storyToSuggest = []
  let { story } = useStaticQuery(graphql`
    query {
      story: allStoryblokEntry(
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

  story.edges.forEach(currentStory => {
    if (
      `insights/${currentStory.node.slug}` !== url &&
      storyToSuggest.length <= 1
    ) {
      storyToSuggest.push(currentStory.node)
    }
  })

  const storyToSuggestCopyOne = useStoryblok(storyToSuggest[0])
  const storyToSuggestCopyTwo = useStoryblok(storyToSuggest[1])

  return (
    <div className="container" style={{ marginBottom: 50 }}>
      <div className="row">
        <div className="col-lg-6">
          <InsightLists
            blok={storyToSuggestCopyOne.content.body[0]}
            index={0}
            slug={storyToSuggestCopyOne.slug}
          />
        </div>
        <div className="col-lg-6">
          <InsightLists
            blok={storyToSuggestCopyTwo.content.body[0]}
            index={1}
            slug={storyToSuggestCopyTwo.slug}
          />
        </div>
      </div>
    </div>
  )
}

export default SimilarInsights
