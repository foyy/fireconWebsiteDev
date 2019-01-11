import React from 'react'
import { StaticQuery, graphql } from 'gatsby'




export const defaultFragment = graphql`
  fragment defaultFragment on File {
    childImageSharp {
      fluid(maxWidth: 2000, maxHeight: 2000) {
              ...GatsbyImageSharpFluid
      }
    }
  }
`