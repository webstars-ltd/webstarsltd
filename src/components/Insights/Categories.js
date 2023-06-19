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
      <section class="innerBanner all-insight-banner">
        <div class="container">
          <div class="insights-Banner">
            <div class="row">
              <div class="col-md-2">
                <div class="insights-Banner-cont">
                  <h6>{blok.title}</h6>
                </div>
              </div>

              <div class="col-md-10">
                <div class="insights-Banner-btn">
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
