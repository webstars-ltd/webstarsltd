import React from "react"

// Project Page components import statements
import ProjectBanner from "./ProjectBanner"
import ProjectLists from "./ProjectLists"
import Testimonial from "./testimonial"
import Text from "./Text"

const Components = {
  teaser_copy: ProjectBanner,
  "Project Quote Card": Testimonial,
  bottom_description_block: Text,
  show_list: ProjectLists,
}

const DynamicComponent = ({ blok, projects }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid} projects={projects} />
  }

  return <></>
}

export default DynamicComponent
