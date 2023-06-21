import React from "react"

import ListComponent from "./ListComponent"

const InsightLists = ({ showMore, categoryTitle }) => {
  return (
    <>
      <div className="insight-display ptb-40 insight-display-list">
        <div className="container">
          <div className="row">
            {showMore.map((originalStory, index) => (
              <div
                className="col-md-6 col-lg-6"
                key={index}
                id="undefined-content"
              >
                <ListComponent
                  story={originalStory}
                  index={index}
                  categoryTitle={categoryTitle}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default InsightLists
