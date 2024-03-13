import React from "react"

import ServiceLists from "./ServiceLists"

const Components = {
  service_display: ServiceLists,
}

const DynamicListComponent = ({ blok, slug, index }) => {
  if (
    typeof Components[blok.component] !== "undefined" &&
    blok.component === "service_display"
  ) {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid} slug={slug} index={index} />
  }

  return <></>
}

export default DynamicListComponent
