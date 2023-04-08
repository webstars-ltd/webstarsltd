import React from "react"
import { storyblokEditable } from "@storyblok/js"
import { Link } from "gatsby"

const EnvelopeSection = ({ component, slug }) => {
  return (
    <div {...storyblokEditable(component)}>
      <div className="envelope-section">
        <div className="custom-container">
          <Link to={`/projects/${slug}`}>
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="envelope-section-image">
                  <img src={component.Section_Image.filename} alt="" />
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="section-content">
                  <h6>{component.Subtitle}</h6>
                  <h4>{component.Title}</h4>
                  <div className="stats">
                    <h4>
                      {component.Numbers_Content[0].Numbers}{" "}
                      <span>{component.Numbers_Content[0]?.Numbers_Text}</span>
                    </h4>
                    <h4 className="stats-last">
                      {component.Numbers_Content[1].Numbers}{" "}
                      <span>{component.Numbers_Content[1]?.Numbers_Text}</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EnvelopeSection
