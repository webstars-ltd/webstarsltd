import React from "react"

// Page level import statements
import Banner from "./Banner"
import BannerImage from "./BannerImage"
import InsightDescription from "./InsightDescription"
import MarketingGuide from "./Guide"
import Text from "./Text"
import SimilarInsights from "./SimilarInsights"

const Components = {
  teaser_text: Banner,
  insight_banner_img: BannerImage,
  description_section: InsightDescription,
  guide: MarketingGuide,
  bottom_text_copy: Text,
  show_insights_suggestions: SimilarInsights,
}

const DynamicComponent = ({ blok, url }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid} url={url} />
  }

  return <></>
}

export default DynamicComponent
