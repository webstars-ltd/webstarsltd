import React from "react"
import { storyblokEditable } from "@storyblok/js"

const BannerImage = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <section className="singleInsightSection1">
        <div className="custom-container">
          <div
            className="singleInsightSec1-main"
            style={{ backgroundColor: blok.background_color_hex_code }}
          >
            <img src={blok.banner_img.filename} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default BannerImage
