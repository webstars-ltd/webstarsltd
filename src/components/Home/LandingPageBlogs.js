import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import BlogListComponent from "./BlogListComponent"

const LandingPageBlogs = ({ blok, hideHash }) => {
  let { insights } = useStaticQuery(graphql`
    query {
      insights: allStoryblokEntry(
        filter: { field_component: { eq: "Single Insight" } }
      ) {
        edges {
          node {
            field_component
            slug
            uuid
            id
            name
            content
          }
        }
      }
    }
  `)

  const filteredBlogs = insights.edges.filter(
    insight =>
      insight.node.name === blok.blog_one || insight.node.name === blok.blog_two
  )

  return (
    <div className="insight-display ptb-40 insight-display-list">
      <div className="container">
        <div className="row">
          {filteredBlogs.map((originalStory, index) => (
            <div
              className="col-md-6 col-lg-6"
              key={index}
              id="undefined-content"
            >
              <BlogListComponent
                story={originalStory.node}
                key={index}
                hideHash={hideHash}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LandingPageBlogs
