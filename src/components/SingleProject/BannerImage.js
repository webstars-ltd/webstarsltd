import React from "react"
import { storyblokEditable } from "@storyblok/js"

const BannerImage = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <section className="single-projectSec1">
        <div className="custom-container">
          <div className="singl-project-sec1-img">
            <img src={blok.banner_img.filename} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default BannerImage
