import React from "react"
import { Link } from "gatsby"
import { storyblokEditable } from "@storyblok/js"
import { render, MARK_LINK } from "storyblok-rich-text-react-renderer"

const Text = ({ blok }) => {
  return (
    <div className="pb-80">
      <div {...storyblokEditable(blok)}>
        <div className="text">
          <h2>
            {render(blok.bottom_text, {
              markResolvers: {
                [MARK_LINK]: (children, props) => {
                  const { href } = props
                  return (
                    <Link to={href} className="underline-style">
                      {children}
                    </Link>
                  )
                },
              },
            })}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Text
