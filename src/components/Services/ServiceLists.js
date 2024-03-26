import { Link } from "gatsby"
import React from "react"

const ServiceLists = ({ blok, slug, index, hideHash }) => {
  return (
    <Link
      to={`/services/${slug}`}
      style={{ marginBottom: 50 }}
      className="insights-link-space"
    >
      <div
        className={
          index % 2 === 0 ? `insight-display-one` : `insight-display-two`
        }
        style={{ backgroundColor: blok.services[0].background_hex_code }}
      >
        {!hideHash ? <h6>{blok.services[0].tag}</h6> : <h6></h6>}

        <h4>{blok.services[0].title}</h4>
        <img
          src={blok.services[0].image.filename}
          alt="Service"
          className="insight-display-one-img"
        />
      </div>
    </Link>
  )
}

export default ServiceLists
