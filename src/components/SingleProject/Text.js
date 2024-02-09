import React from "react"
import { storyblokEditable } from "@storyblok/js"
import { Link } from "gatsby"
import {
  render,
  MARK_LINK,
  MARK_TEXT_STYLE,
} from "storyblok-rich-text-react-renderer"

const Text = ({ blok }) => {
  return (
    <>
      <div className="testimonial-separator" style={{ marginTop: 16 }}>
        <div className="separator" />
      </div>
      <div className="pb-80">
        <div {...storyblokEditable(blok)}>
          <div className="text">
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
                  [MARK_TEXT_STYLE]: (children, props) => {
                    return (
                      <span style={{ color: props?.color }}>{children}</span>
                    )
                  },
                },
              })}
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Text
