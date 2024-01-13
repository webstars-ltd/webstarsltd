import { Link } from "gatsby"
import React from "react"
import { storyblokEditable } from "@storyblok/js"
import { render, MARK_LINK } from "storyblok-rich-text-react-renderer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const SimilarProjectQuote = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <section className="testimonialSection-single-project">
        <div className="custom-container">
          <div className="testiSec-main">
            <div className="row">
              <div className="col-sm-12 col-lg-3">
                <div className="testiSec-img">
                  <img src={blok.card[0].person_img.filename} alt="" />
                </div>
              </div>

              <div className="col-sm-12 col-lg-9">
                <div className="testiSec-cont">
                  <h6>{blok.card[0].title}</h6>
                  {render(blok.card[0].text, {
                    markResolvers: {
                      [MARK_LINK]: (children, props) => {
                        const { href } = props
                        return <a href={`mailto:${href}`}>{children}</a>
                      },
                    },
                  })}
                  <ul className="mn-social-icon">
                    {/* <li>
                      <Link to={blok.card[0].facebook_profile_url}>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                      </Link>
                    </li> */}

                    <li>
                      <Link to={blok.card[0].linkedin_profile_url}>
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Link>
                    </li>

                    {/* <li>
                      <Link to={blok.card[0].twitter_profile_url}>
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SimilarProjectQuote
