import React from "react"

import Banner from "../Home/Banner"
import Text from "./Text"
import ImageCollage from "./ImageCollage"

const Components = {
  teaser: Banner,
  bottom_text: Text,
  image_collage: ImageCollage,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid} />
  }

  return <></>
}

export default DynamicComponent
