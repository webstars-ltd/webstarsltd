import React, { useState } from "react"

import Services from "./Services"
import ProjectBanner from "../Projects/ProjectBanner"

const Components = {
  show_services_list: Services,
  teaser_copy: ProjectBanner,
}

const DynamicComponent = ({ blok, services }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]

    return <Component blok={blok} key={blok._uid} services={services} />
  }

  return <></>
}

export default DynamicComponent
