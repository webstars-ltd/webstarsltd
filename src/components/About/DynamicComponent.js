import React from "react"

import AboutDescription from "./AboutDescription"
import MarketingGuide from "../Home/MarketingGuide"
import BannerImage from "../SingleProject/BannerImage"
import Banner from "./Banner"
import Text from "./Text"

const Components = {
  teaser: Banner,
  "Project Banner": BannerImage,
  about_description: AboutDescription,
  "Marketing Guide": MarketingGuide,
  "Bottom Headline Text": Text,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid} />
  }

  return <div></div>
}

export default DynamicComponent
