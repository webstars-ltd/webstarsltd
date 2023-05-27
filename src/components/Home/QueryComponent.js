import React from 'react'
import { graphql, StaticQuery } from 'gatsby';

const QueryComponent = ({ title }) => (
  <StaticQuery
    query={graphql`
      query($title: String!) {
        story: allStoryblokEntry(
            filter: { name: { eq: $title } }
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
    `}
    render={(data) => (
      <div>
        {console.log(data)}
      </div>
    )}
    variables={{ title }} // Provide the variable values here
  />
);

export default QueryComponent