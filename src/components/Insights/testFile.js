import React from "react"
import { storyblokEditable } from "@storyblok/js"

import { useStoryblok } from "../../utils/storyblok"
import DynamicListComponent from "./DynamicListComponent"

const TestFile = ({ story, index, categoryTitle }) => {
  let originalStory
  originalStory = useStoryblok(story)
  const filteredStory = originalStory.content.body.filter(
    childBlok =>
      childBlok.component === "insight_display" &&
      childBlok.insights[0].catgeory_name.length &&
      childBlok.insights[0].catgeory_name.includes(categoryTitle)
  )

  const content =
    originalStory.content.body &&
    filteredStory.map(childBlok => (
      <DynamicListComponent
        blok={childBlok}
        key={childBlok._uid}
        slug={story.slug}
        index={index}
        categoryTitle={categoryTitle}
      />
    ))

  return (
    content.length && (
      <div {...storyblokEditable(originalStory.content)}>{content}</div>
    )
  )
}

export default TestFile
