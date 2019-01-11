import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

// const defaultFragment = graphql`
//   fragment defaultFragment on File {
//     childImageSharp {
//       fluid(maxWidth: 1000) {
//               ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `

const HeaderImage = () => {

  return <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "generalStyling/navbarBackgroundBanner.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 250) {
              ...GatsbyImageSharpFluid
              }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
}
export default HeaderImage

