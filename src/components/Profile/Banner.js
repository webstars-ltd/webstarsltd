import React from "react"
import { storyblokEditable } from "@storyblok/js"

const Banner = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="home-banner-profile">
        <h1>
          <span
            className="d-block"
            style={{
              fontSize: blok.headline_font ? `${blok.headline_font}px` : "55px",
            }}
          >
            {blok.headline}
          </span>
          <span
            className="theme-color"
            style={{
              fontSize: blok.headline_sub_part_font
                ? `${blok.headline_sub_part_font}px`
                : "55px",
            }}
          >
            {blok.headline_sub_part}
          </span>
        </h1>
      </div>
    </div>
  )
}

export default Banner
