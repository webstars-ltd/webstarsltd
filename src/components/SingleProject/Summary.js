import React from "react"
import { storyblokEditable } from "@storyblok/js"
import { render, MARK_BOLD } from "storyblok-rich-text-react-renderer"

const Summary = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <section className="single-projectSec2">
        <div className="custom-container">
          <div className="row">
            <div className="col-md-6 pr-5">
              <div className="singl-project-sec2-cont">
                <h6>{blok.summary_title}</h6>
                <p>
                  {render(blok.summary_description, {
                    markResolvers: {
                      [MARK_BOLD]: (children, props) => {
                        return <span className="black">{children}</span>
                      },
                    },
                  })}
                </p>
              </div>
            </div>
            <div className="col-md-6 pl-5">
              <div className="singl-project-sec2-cont">
                <h6>{blok.brief_title}</h6>
                <p>
                  {render(blok.brief_description, {
                    markResolvers: {
                      [MARK_BOLD]: (children, props) => {
                        return <span className="black">{children}</span>
                      },
                    },
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Summary
