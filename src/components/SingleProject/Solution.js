import React from "react"
import { storyblokEditable } from "@storyblok/js"
import { render, MARK_BOLD } from "storyblok-rich-text-react-renderer"

const Solution = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <section className="single-projectSec3">
        <div className="custom-container">
          <div className="row align-items-stretch">
            <div className="col-md-6">
              <div className="singlproSec1-l-cont">
                {render(blok.section_title, {
                  markResolvers: {
                    [MARK_BOLD]: (children, props) => {
                      return <span>{children}</span>
                    },
                  },
                })}

                {render(blok.section_description)}
              </div>
            </div>

            <div className="col-md-6">
              <div className="singlproSec1-r-cont">
                {blok.stats_section.map(stats => (
                  <div className="text-center" key={stats.stats_number}>
                    <span>
                      <em>{stats.stats_number}</em>
                      <strong>{stats.stats_description}</strong>
                    </span>
                  </div>
                ))}

                <div>
                  <h5>{blok.expertise_title}</h5>

                  {render(blok.expertise_list)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Solution
