import React, { useState } from "react"

import Categories from "./Categories"

const Components = {
  categories: Categories,
}

const DynamicComponent = ({ blok, showMore }) => {
  const [categoryTitle, setCategoryTitle] = useState("All")

  const changeCategory = title => {
    if (title === categoryTitle) {
      setCategoryTitle("All")
      localStorage.setItem("title", "All")
    } else {
      setCategoryTitle(title)
    }
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
