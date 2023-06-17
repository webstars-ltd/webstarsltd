import React from "react"

// import ListComponent from "./ListComponent"
import TestFile from "./testFile"

const InsightLists = ({ showMore, categoryTitle }) => {
  return (
    <>
      <div className="insight-display ptb-40 insight-display-list">
        <div className="container">
          <div className="row">
            {showMore
              .filter((originalStory, index) => (
                <TestFile
                  key={index}
                  story={originalStory.node}
                  index={index}
                  categoryTitle={categoryTitle}
                />
              ))
              .map((item, index) => (
                <div
                  className="col-md-6 col-lg-6"
                  key={index}
                  id="undefined-content"
                >
                  {item}
                </div>
              ))}

            {/* {showMore.filter((originalStory, index) => (
              
                <ListComponent
                  story={originalStory.node}
                  index={index}
                  categoryTitle={categoryTitle}
                />
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default InsightLists
