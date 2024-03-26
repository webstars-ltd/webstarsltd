import React, { useState } from "react"
import { Link } from "gatsby"
import Modal from "react-modal"
import { storyblokEditable } from "@storyblok/js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import moment from "moment"
import {
  faFacebookSquare,
  faLinkedin,
  faInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons"
import { render } from "storyblok-rich-text-react-renderer"

const ServiceDescription = ({ blok }) => (
  <section className="singleInsightSection2" {...storyblokEditable(blok)}>
    <div className="custom-container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="singleInsightSec1-profile">
            <div className="singleInsightSec1-profile-img">
              <img src={blok.user_img.filename} alt="" z />
            </div>
          </div>
          <div className="prose text-center text-base">
            {render(blok.description_blurb)}
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="singleInsightSec1-cont">
            <h6>{blok.title}</h6>
            {render(blok.description_para)}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ServiceDescription
