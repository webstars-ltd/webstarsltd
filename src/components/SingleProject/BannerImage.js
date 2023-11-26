import React from "react"
import { storyblokEditable } from "@storyblok/js"
import { WistiaProvider, WistiaPlayer } from "@wistia/react-embeds"

const BannerImage = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <section className="single-projectSec1">
        <div className="custom-container">
          {blok && blok.wistia_video_id ? (
            <WistiaProvider>
              <WistiaPlayer hashedId={blok.wistia_video_id} />
            </WistiaProvider>
          ) : (
            <div className="singl-project-sec1-img">
              <img src={blok.banner_img.filename} alt="" />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default BannerImage
