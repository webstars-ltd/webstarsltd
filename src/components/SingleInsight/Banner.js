import React from "react"
import { storyblokEditable } from "@storyblok/js"

const Banner = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <section className="home-banner-single-insight">
        <div className="container">
          <h1>
            <span className="d-block">{blok.headline}</span>
            <span className="theme-color">{blok.subtitle}</span>
          </h1>
        </div>
      </section>
    </div>
  )
}

export default Banner
