import React from 'react'
import { useStaticQuery, graphql, StaticQuery } from "gatsby"

const LandingPageBlogs = ({ blok }) => {
    console.log(blok)
    const title = blok.blog_one

//     let blog_one = useStaticQuery(graphql`
//     query {
//       story: allStoryblokEntry(
//         filter: { name: { eq: ${blok.blog_one} } }
//       ) {
//         edges {
//           node {
//             field_component
//             slug
//             uuid
//             id
//             name
//             content
//           }
//         }
//       }
//     }
//   `)

    //   let blog_two = useStaticQuery(graphql`
    //   query {
    //     story: allStoryblokEntry(
    //       filter: { name: { eq: ${blok.blog_two} } }
    //     ) {
    //       edges {
    //         node {
    //           field_component
    //           slug
    //           uuid
    //           id
    //           name
    //           content
    //         }
    //       }
    //     }
    //   }
    // `)

    console.log(blog_one)

    return (
        <StaticQuery query={graphql`
  query HeadingQuery($title: String!) {
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
  `
        }
            variables={{ title }}
            render={data => (
                <div>
                    <div>Component {console.log(data)}</div>
                </div>
            )}
        />
    )
}

export default LandingPageBlogs