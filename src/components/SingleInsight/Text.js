import React from "react"
import { storyblokEditable } from "@storyblok/js"
import { Link } from "gatsby"
import { render, MARK_LINK } from "storyblok-rich-text-react-renderer"

const Text = ({ blok }) => {
  return (
    <>
      <div className="testimonial-separator" style={{ marginTop: 30 }}>
        <div className="separator" />
      </div>
      <div className="pb-80">
        <div {...storyblokEditable(blok)}>
          <div className="text">
            <h2
              style={{
                fontSize: blok.bottom_text_font
                  ? `${blok.bottom_text_font}px`
                  : "52px",
                lineHeight: blok.bottom_text_font_line_height
                  ? `${blok.bottom_text_font_line_height}px`
                  : "62px",
              }}
            >
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
    </>
  )
}

export default Text
