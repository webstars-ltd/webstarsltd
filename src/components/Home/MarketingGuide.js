import React from "react"
import { storyblokEditable } from "@storyblok/js"

const MarketingGuide = ({ blok }) => {
  console.log("Check --------")
  console.log(blok.background_color_hex)
  return (
    <>
      <div {...storyblokEditable(blok)}>
        <div className="marketing-guide-section">
          <div className="custom-container">
            <div className="marketing-guide">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="marketing-guide-content">
                    <h6>{blok.Subtitle}</h6>
                    <h4>
                      <span className="d-block">{blok.Title_White}</span>{" "}
                      {blok.Title_Cyan}
                    </h4>
                    <button className="btn btn-download">Download</button>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="marketing-guide-image">
                    <img src={blok.Section_Image.filename} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="ptb-80">
          <div className="separator">&nbsp;</div>
        </div>
      </div>
    </>
  )
}

export default MarketingGuide
