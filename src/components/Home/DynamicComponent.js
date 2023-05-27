import React from "react"

import Banner from "./Banner"
import MarketingGuide from "./MarketingGuide"
import ProjectList from "./ProjectList"
import Text from "./Text"

const Components = {
  teaser: Banner,
  show_list: ProjectList,
  "Marketing Guide": MarketingGuide,
  "Bottom Headline Text": Text,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid} />
  }

  return <></>
}

export default DynamicComponent
