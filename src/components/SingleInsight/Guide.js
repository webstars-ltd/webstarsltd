import React from "react"
import { storyblokEditable } from "@storyblok/js"

const Guide = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="single-insight-guide">
        <div className="custom-container">
          <div
            className="marketing-guide"
            style={{
              backgroundColor: `${
                blok.marketing_guide[0].background_color_hex
                  ? blok.marketing_guide[0].background_color_hex
                  : "#140e10"
              }`,
            }}
          >
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="marketing-guide-content">
                  <h6>{blok.marketing_guide[0].Subtitle}</h6>
                  <h4>
                    <span className="d-block">
                      {blok.marketing_guide[0].Title_White}
                    </span>{" "}
                    {blok.marketing_guide[0].Title_Cyan}
                  </h4>
                  <div className="downloadable-btn">
                    <a
                      className="btn btn-download"
                      href={blok.file?.filename}
                      target="_blank"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="marketing-guide-image">
                  <img
                    src={blok.marketing_guide[0].Section_Image.filename}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guide
