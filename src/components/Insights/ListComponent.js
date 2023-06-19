import React from "react"

// Page level import statements
import DynamicListComponent from "./DynamicListComponent"
import { useStoryblok } from "../../utils/storyblok"

const ListComponent = ({ story, categoryTitle }) => {
  let originalStory
  originalStory = useStoryblok(story)
  const filteredStory = originalStory.content.body.filter(
    childBlok =>
      childBlok.component === "insight_display" &&
      childBlok.insights[0].catgeory_name.length &&
      childBlok.insights[0].catgeory_name.includes(categoryTitle)
  )

  console.log(story)

  const content = filteredStory.map((childBlok, index) => (
    <DynamicListComponent
      blok={childBlok}
      key={childBlok._uid}
      slug={story.slug}
      index={index}
      categoryTitle={categoryTitle}
    />
  ))

  return <div>{content}</div>
}

export default ListComponent
