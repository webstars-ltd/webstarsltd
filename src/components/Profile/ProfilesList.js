import React from "react"
import { Link } from "gatsby"
import { storyblokEditable } from "@storyblok/js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons"

const ProfilesList = ({ blok }) => {
  return (
    <>
      <div {...storyblokEditable(blok)}>
        <div className="profileSection1">
          <div className="custom-container-md">
            <div className="row">
              {blok.user_profile_grid.map((profileItem, index) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12"
                  key={`${profileItem._uid}`}
                >
                  <div className="profileSec1-card">
                    <div className="profileSec1-img">
                      <img src={profileItem.user_image.filename} alt="" />
                    </div>

                    <h6>{profileItem.user_name}</h6>
                    <p>{profileItem.user_role}</p>

                    <ul className="mn-social-icon">
                      {profileItem.user_social_profile.map(socialProfile => (
                        <li>
                          <Link
                            to={socialProfile.profile_url.url}
                            className="profile-fb"
                            key={socialProfile._uid}
                            target="_blank"
                          >
                            <FontAwesomeIcon
                              icon={
                                socialProfile.Title === "LinkedIn"
                                  ? faLinkedin
                                  : socialProfile.Title === "Facebook"
                                  ? faFacebookSquare
                                  : faSquareXTwitter
                              }
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-separator">
        <div className="separator" />
      </div>
    </>
  )
}

export default ProfilesList
