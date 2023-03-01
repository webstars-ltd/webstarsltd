import React from "react"

// Page level import statements
import BannerText from "./BannerText"
import BannerImage from "./BannerImage"
import Summary from "./Summary"
import Solution from "./Solution"
import SimilarProjectQuote from "./SimilarProjectQuote"
import SimilarProjects from "./SimilarProjects"
import Text from "./Text"

const Components = {
  "Summary Section": Summary,
  bottom_text: Text,
  similar_project_card: SimilarProjectQuote,
  single_project_banner: BannerImage,
  single_project_banner_text: BannerText,
  single_project_solution: Solution,
  show_projects_suggestions: SimilarProjects,
}

const DyanmicComponent = ({ blok, url }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid} url={url} />
  }

  return <></>
}

export default DyanmicComponent
