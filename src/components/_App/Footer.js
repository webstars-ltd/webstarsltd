import React from "react"
import { Link } from "gatsby"

import Logo from "../../assets/images/logo-white1.png"

// This is a global footer component for the webstarsltd template
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_logo">
          <img src={Logo} alt="webstarsltd" className="footer_logo_img" />
        </div>
        <div className="row">
          <div className="col-lg-5">
            <blockquote>
              "Your professionalism, knowledge, and ease have made the
              collaboration delightful."
            </blockquote>
            <div className="author-info-d-sm">
              <h6 className="author">
                Sophia Boutalbi, International Group of P&I Clubs
              </h6>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer_info footer_info_first">
              <h4>Find Us</h4>
              <ul>
                <li>Studio 402</li>
                <li>Coppergate House</li>
                <li>10 Whites Row</li>
                <li>London E1 7NF</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer_info">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <a href="tel:+44 20 7183 0058">020 7183 0058</a>
                </li>
                <li>
                  <a href="mailto:hello@webstarsltd.com">
                    hello@webstarsltd.com
                  </a>
                </li>
                <li>
                  <a href="mailto:jobs@webstarsltd.com">jobs@webstarsltd.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer_info footer_info_last">
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <Link
                    to="https://www.linkedin.com/company/webstars-ltd/"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.tiktok.com/@webstarsltd"
                    target="_blank"
                  >
                    TikTok
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.facebook.com/webstarsltd"
                    target="_blank"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/webstarsltd/"
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.youtube.com/@webstarsltd"
                    target="_blank"
                  >
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="author-info">
              <h6 className="author">
                Sophia Boutalbi, International Group of P&I Clubs
              </h6>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="copyright-terms">
              <div className="copyright-terms-details">
                <ul>
                  <li>&copy; Webstars {new Date().getFullYear()}</li>
                  <li>
                    <Link
                      to="https://platform.illow.io/#/policy/cookie/985708de-addb-4d38-94b8-90e3700b80a5"
                      target="_blank"
                    >
                      Privacy & Cookies
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms">T&Cs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
