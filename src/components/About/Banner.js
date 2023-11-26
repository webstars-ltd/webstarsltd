import React from "react"
import { storyblokEditable } from "@storyblok/js"

const Banner = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="home-banner-process">
        <h1>
          <span className="d-block">{blok.headline}</span>
          <span className="theme-color">{blok.headline_sub_part}</span>
        </h1>
      </div>
    </div>
  )
}

export default Banner
