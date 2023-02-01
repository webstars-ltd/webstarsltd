import React from "react"

import InsightLists from "./InsightLists"

const Components = {
  insight_display: InsightLists,
}

const DynamicListComponent = ({ blok, slug, index, categoryTitle }) => {
  if (
    typeof Components[blok.component] !== "undefined" &&
    blok.component === "insight_display"
  ) {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid} slug={slug} index={index} />
  }

  return <></>
}

export default DynamicListComponent
