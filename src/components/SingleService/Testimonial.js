import React from "react"
import { storyblokEditable } from "@storyblok/js"

const Guide = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="service-testimonial-section">
        <div className="custom-container">
          <blockquote className="service-testimonial">
            "{blok.quote}"<cite>{blok.name}</cite>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default Guide
