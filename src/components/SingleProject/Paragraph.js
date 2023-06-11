import React from "react"
import { storyblokEditable } from "@storyblok/js"
import { render, MARK_BOLD } from "storyblok-rich-text-react-renderer"

const BannerText = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <section class="single-project-paragraph">
        <div class="custom-container">
          <h1>
            {render(blok.paragraph, {
              markResolvers: {
                [MARK_BOLD]: (children, props) => {
                  return <span className="black">{children}</span>
                },
              },
            })}
          </h1>
        </div>
      </section>
    </div>
  )
}

export default BannerText
