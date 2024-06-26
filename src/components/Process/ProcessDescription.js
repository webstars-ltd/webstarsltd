import React from "react"
import { Link } from "gatsby"
import { storyblokEditable } from "@storyblok/js"
import { render, MARK_LINK } from "storyblok-rich-text-react-renderer"

const ProcessDescription = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.process_sayings ? (
        <section className="processSection1">
          <div className="custom-container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="processSec1-r-cont">
                  {render(blok.process_details, {
                    markResolvers: {
                      [MARK_LINK]: (children, props) => {
                        const { href } = props
                        return <Link to={href}>{children}</Link>
                      },
                    },
                  })}
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="processSec1-l-cont">
                  <h6>“{blok.process_sayings}”</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="processSection1-full">
          <div className="custom-container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="processSec1-r-cont">
                  {render(blok.process_details, {
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
      )}
    </div>
  )
}

export default ProcessDescription
