import React from "react"
import { storyblokEditable } from "@storyblok/js"

// Page level import statements
import DynamicComponent from "./DynamicComponent"

const MainComponent = ({ blok }) => {
  const content =
    blok.body &&
    blok.body.map(childBlok => (
      <DynamicComponent blok={childBlok} key={childBlok._uid} />
    ))

  return <div {...storyblokEditable(blok)}>{content}</div>
}

export default MainComponent
