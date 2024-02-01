import React from "react"

import { useStoryblok } from "../../utils/storyblok"
import GlobalAudience from "../Projects/GlobalAudience"
import EnvelopeSection from "../Projects/EnvelopeSection"

const SimilarProjectRendering = ({ suggestedProject }) => {
  const projectToSuggest = useStoryblok(suggestedProject)

  return projectToSuggest.content.body[0]?.project_display[0].component ===
    "Envelope Section" ? (
    <EnvelopeSection
      component={projectToSuggest?.content?.body[0]?.project_display[0]}
      slug={projectToSuggest.slug}
    />
  ) : (
    <GlobalAudience
      component={projectToSuggest?.content?.body[0]?.project_display[0]}
      slug={projectToSuggest.slug}
    />
  )
}

export default SimilarProjectRendering
