import { Link } from "gatsby"
import React from "react"

const InsightLists = ({ blok, slug, index, hideHash }) => {
  return (
    <Link
      to={`/insights/${slug}`}
      style={{ marginBottom: 50 }}
      className="insights-link-space"
    >
      <div
        className={
          index % 2 === 0 ? `insight-display-one` : `insight-display-two`
        }
        style={{ backgroundColor: blok.insights[0].background_hex_code }}
      >
        {!hideHash ? <h6>{blok.insights[0].tag}</h6> : <h6></h6>}

        <h4>{blok.insights[0].title}</h4>
        <img
          src={blok.insights[0].image.filename}
          alt="Insight"
          className="insight-display-one-img"
        />
      </div>
    </Link>
  )
}

export default InsightLists
