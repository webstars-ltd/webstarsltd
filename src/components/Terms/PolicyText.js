import React from "react"
import { storyblokEditable } from "@storyblok/js"
import { Link } from "gatsby"
import { render, MARK_LINK } from "storyblok-rich-text-react-renderer"

const Text = ({ blok }) => {
  return (
    <div className="custom-container policy-text-container">
      <div {...storyblokEditable(blok)}>
        <div className="policy-text">
          <h2>
            {render(blok.text, {
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
