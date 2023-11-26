import React from "react"
import { Link } from "gatsby"
import { storyblokEditable } from "@storyblok/js"
import { render, MARK_LINK } from "storyblok-rich-text-react-renderer"

const AboutDescription = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <section className="about-description">
        <div className="custom-container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="singleInsightSec1-cont">
                {render(blok.description, {
                  markResolvers: {
                    [MARK_LINK]: (children, props) => {
                      const { href } = props
                      return <Link to={href}>{children}</Link>
                    },
                  },
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutDescription
