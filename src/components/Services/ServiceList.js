import React from "react"

import ListComponent from "./ListComponent"

const ServiceList = ({ services }) => {
  return (
    <div className="insight-display ptb-40 insight-display-list">
      <div className="container">
        <div className="row">
          {services.map((originalStory, index) => (
            <div
              className="col-md-6 col-lg-6"
              key={index}
              id="undefined-content"
            >
              <ListComponent story={originalStory} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceList
