import React from "react"

// Page level import statements
import DynamicListComponent from "./DynamicListComponent"

const ListComponent = ({ story, categoryTitle, index }) => {
  return (
    <DynamicListComponent
      blok={story.content.body[0]}
      slug={story.slug}
      index={index}
      categoryTitle={categoryTitle}
    />
  )
}

export default ListComponent
