import React from "react"
import { storyblokEditable } from "@storyblok/js"
import { render, MARK_BOLD } from "storyblok-rich-text-react-renderer"

const BannerText = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <section class="home-banner-single-project">
        <div class="container">
          <h1>
            {render(blok.banner_text, {
              markResolvers: {
                [MARK_BOLD]: (children, props) => {
                  return <span className="black">{children}</span>
                },
              },
            })}
            {/* <span className="d-block">
              <span className="black">Aon ReMetrica</span> Overcoming
            </span>
            <span className="d-block">‘webinar fatigue’ with a results</span>
            -driven, multichannel campaign */}
          </h1>
        </div>
      </section>
    </div>
  )
}

export default BannerText
