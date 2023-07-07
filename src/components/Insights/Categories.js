import React from "react"
import { storyblokEditable } from "@storyblok/js"

import InsightList from "./InsightList"

const Categories = ({ blok, setCategoryTitle, categoryTitle, showMore }) => {
  const switchCategoryHandler = title => {
    if (title === categoryTitle) {
      setCategoryTitle("All")
      localStorage.setItem("title", "All")
    } else {
      setCategoryTitle(title)
      localStorage.setItem("title", title)
    }
  }

  return (
    <div {...storyblokEditable(blok)}>
      <section className="innerBanner all-insight-banner">
        <div className="container">
          <div className="insights-Banner">
            <div className="row">
              <div className="col-md-2">
                <div className="insights-Banner-cont">
                  <h6>{blok.title}</h6>
                </div>
              </div>

              <div className="col-md-10">
                <div className="insights-Banner-btn">
                  <ul>
                    {blok.category_list.map(category => (
                      <li
                        key={category.title}
                        className={
                          categoryTitle === category.title ? "current" : ""
                        }
                      >
                        <button
                          onClick={() => switchCategoryHandler(category.title)}
                        >
                          {category.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InsightList categoryTitle={categoryTitle} showMore={showMore} />
    </div>
  )
}

export default Categories
