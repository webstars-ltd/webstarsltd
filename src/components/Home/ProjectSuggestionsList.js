import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ListComponent from "./ListComponent"

const ProjectSuggestionsList = ({ blok, hideHash }) => {
  let { projects } = useStaticQuery(graphql`
    query {
      projects: allStoryblokEntry(
        filter: { field_component: { eq: "SingleProject" } }
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

  const filteredProjects = projects.edges.filter(
    project =>
      project.node.name === blok.project_one ||
      project.node.name === blok.project_two ||
      project.node.name === blok.project_three ||
      project.node.name === blok.project_four
  )

  return (
    <div className="insight-display ptb-40 insight-display-list">
      <div className="container">
        <div className="row">
          {filteredProjects.map((originalStory, index) => (
            <ListComponent
              story={originalStory.node}
              key={index}
              hideHash={hideHash}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectSuggestionsList
