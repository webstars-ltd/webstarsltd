import React from "react"

import DynamicListComponent from "./DynamicListComponent"

const ProjectLists = ({ projects }) => {
  return projects.map((originalStory, index) => (
    <DynamicListComponent
      blok={originalStory.content.body[0]}
      key={index}
      slug={originalStory.slug}
    />
  ))
}

export default ProjectLists
