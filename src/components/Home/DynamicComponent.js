import React from "react"

import Banner from "./Banner"
import MarketingGuide from "./MarketingGuide"
import ProjectList from "./ProjectList"
import Text from "./Text"
import LandingPageBlogs from "./LandingPageBlogs"

const Components = {
  teaser: Banner,
  show_list: ProjectList,
  "Marketing Guide": MarketingGuide,
  "Bottom Headline Text": Text,
  blogs_on_landing_page: LandingPageBlogs
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid} />
  }

  return <></>
}

export default DynamicComponent
