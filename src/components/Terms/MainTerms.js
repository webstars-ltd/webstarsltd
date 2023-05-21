import React from "react"
import { storyblokEditable } from "@storyblok/js"

import DynamicComponent from "./DynamicComponent"

const MainHome = ({ blok }) => {
  const content =
    blok.body &&
    blok.body.map(childBlok => (
      <DynamicComponent blok={childBlok} key={childBlok._uid} />
    ))

  return <div {...storyblokEditable(blok)}>{content}</div>
}

export default MainHome
