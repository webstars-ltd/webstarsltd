import React, { useState } from "react"

import Categories from "./Categories"

const Components = {
  categories: Categories,
}

const DynamicComponent = ({ blok, showMore, setInsights }) => {
  const [categoryTitle, setCategoryTitle] = useState("All")

  const changeCategory = title => {
    if (title === categoryTitle) {
      setCategoryTitle("All")
      localStorage.setItem("title", "All")
    } else {
      setCategoryTitle(title)
    }

    const filteredData = showMore.filter(story => {
      if (
        story.content &&
        story.content.body &&
        Array.isArray(story.content.body) &&
        story.content.body.some(item => {
          return (
            item.component === "insight_display" &&
            item.insights &&
            Array.isArray(item.insights) &&
            item.insights.some(insight => {
              return insight.catgeory_name.includes(title)
            })
          )
        })
      ) {
        return true
      }
      return false
    })

    setInsights(filteredData)
  }

  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]

    return (
      <Component
        blok={blok}
        key={blok._uid}
        categoryTitle={categoryTitle}
        setCategoryTitle={changeCategory}
        showMore={showMore}
      />
    )
  }

  return <></>
}

export default DynamicComponent
