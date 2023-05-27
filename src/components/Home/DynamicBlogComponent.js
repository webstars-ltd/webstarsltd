import React from 'react'

import InsightLists from '../Insights/InsightLists'

const Components = {
    insight_display: InsightLists,
  }

const DynamicBlogComponent = ({ blok, slug }) => {
    if (
        typeof Components[blok.component] !== "undefined" &&
        blok.component === "insight_display"
      ) {
        const Component = Components[blok.component]
        return <Component blok={blok} key={blok._uid} slug={slug} />
      }
    
      return <></>
}

export default DynamicBlogComponent
