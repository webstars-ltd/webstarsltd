import React from "react"

import InsightOne from "../../assets/images/insight1.png"
import InsightTwo from "../../assets/images/insight2.png"

const Suggestion = () => {
  return (
    <div className="insight-display ptb-80 single-insight-display">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div
              className="insight-display-one"
              style={{ backgroundColor: "#3fa0d71f" }}
            >
              <h6>Insight</h6>
              <h4>
                Creativity in a time of crisis: how can you make a difference?
              </h4>
              <img
                src={InsightOne}
                alt="Insight"
                className="insight-display-one-img"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div
              className="insight-display-two"
              style={{ backgroundColor: "#ECECEC50" }}
            >
              <h6>Insight</h6>
              <h4>How to build Your User Persona</h4>
              <img
                src={InsightTwo}
                alt="Insight"
                className="insight-display-two-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Suggestion
