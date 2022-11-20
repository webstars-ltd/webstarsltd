import React from "react"
import { Link } from "gatsby"
import { storyblokEditable } from "@storyblok/js"

const Clients = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <section class="client-logoSection">
        <div class="container">
          <div class="clientLogoSec-hd">
            <h6>{blok.headline}</h6>
          </div>

            {/* <div className="clientsLogo">
            {blok.logos.map(logo => (
                <div key={logo.id} className="logo-img">
                    <img src={logo.filename} alt="" />
                </div>
              ))}
            </div> */}

          <div class="clientLogoSec-main">
            <ul>
              {blok.logos.map(logo => (
                <li key={logo.id}>
                    <img src={logo.filename} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Clients
