import React, { useState } from "react"
import { storyblokEditable } from "@storyblok/js"
import { WistiaProvider, WistiaPlayer } from "@wistia/react-embeds"

const BannerImage = ({ blok }) => {
  const [videoError, setVideoError] = useState(false)

  const handleVideoError = error => {
    console.log("error ----------", error)
    console.log("error ----------", error.message)
    setVideoError(true)
  }

  return (
    <div {...storyblokEditable(blok)}>
      <section className="single-projectSec1">
        <div className="custom-container">
          {blok && blok.wistia_video_id && !videoError ? (
            <WistiaProvider>
              <WistiaPlayer
                hashedId={blok.wistia_video_id}
                autoPlay
                onError={handleVideoError}
              />
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
