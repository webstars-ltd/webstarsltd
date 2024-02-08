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
  faTiktok
} from "@fortawesome/free-brands-svg-icons"
import { render } from "storyblok-rich-text-react-renderer"
const NativeForms = React.lazy(() => import("native-forms-react"))

const InsightDescription = ({ blok }) => {
  const [showPopup, setShowPopup] = useState(false)
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "36%",
      padding: "50px 30px",
    },
  }
  const closeModal = () => {
    setShowPopup(false)
  }

  const openModal = () => {
    setShowPopup(true)
  }

  return (
    <div {...storyblokEditable(blok)}>
      <Modal
        isOpen={showPopup}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <React.Suspense fallback={<></>}>
          <NativeForms
            form="https://form.nativeforms.com/JZDdV1jZm80UPJnWH1Db"
            onClose={result => console.log("on-close", result)}
            onSend={result => console.log("on-send", result?.form?.completed)}
          />
        </React.Suspense>
      </Modal>

      <section className="singleInsightSection2">
        <div className="custom-container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="singleInsightSec1-profile">
                <div className="singleInsightSec1-profile-img">
                  <img src={blok.user_img.filename} alt="" z />
                </div>

                <h6>By {blok.user_name}</h6>
                <p>{moment(blok.date).format("MMMM Do, YYYY")}</p>

                <div className="insight-socials">
                  <Link
                    to={"https://uk.linkedin.com/company/webstars-ltd"}
                    className="profile-fb"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                  <Link
                    to={"https://www.tiktok.com/@webstarsltd"}
                    className="profile-fb"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faTiktok} />
                  </Link>
                  <Link
                    to={"https://www.instagram.com/webstarsltd/"}
                    className="profile-fb"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link
                    to={"https://www.facebook.com/webstarsltd"}
                    className="profile-fb"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </Link>
                  <Link
                    to={"https://www.youtube.com/@webstarsltd"}
                    className="profile-fb"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                </div>
                <button onClick={openModal} className="contactBtn">
                  Contact Us
                </button>
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
    </div>
  )
}

export default InsightDescription
