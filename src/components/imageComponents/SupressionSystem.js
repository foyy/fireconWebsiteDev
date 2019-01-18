import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const NfpaSystem = () => {

  return <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "generalStyling/supressionSystem.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpFluid
              }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
}
export default NfpaSystem

