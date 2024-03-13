import React from "react"
import { storyblokEditable } from "@storyblok/js"

import ServiceList from "./ServiceList"

const Services = ({ blok, services }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <ServiceList services={services} />
    </div>
  )
}

export default Services
