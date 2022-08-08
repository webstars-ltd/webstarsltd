import React from "react"

import Banner from "./Banner"
import GlobalAudience from "./GlobalAudience"
import EnvelopeSection from "./EnvelopeSection"
import InsightDisplay from "./InsightDisplay"
import MarketingGuide from "./MarketingGuide"
import Text from "./Text"

const Components = {
  teaser: Banner,
  "Global Audience Section": GlobalAudience,
  "Envelope Section": EnvelopeSection,
  "Marketing Guide": MarketingGuide,
  "Bottom Headline Text": Text,
}

const DynamicComponent = ({ blok }) => {
  console.log(blok)
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid} />
  }

  return (
    <div>
      <div>DynamicComponent</div>
    </div>
  )
}

export default DynamicComponent