import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Navbar from '../components/navbar'
import HeaderImage from '../components/imageComponents/headerImage'


const Header = ({ siteTitle }) => (
  <div id="testingContainer">
    <Navbar />

    <div style={{margin: '0 auto',
          padding: '1.45rem 1.0875rem',}}>
      <HeaderImage />

    </div>
    <div
      style={{
        marginBottom: '1.45rem',
      }}
    >


      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          minHeight: 300,
          padding: '1.45rem 1.0875rem',
        }}
      />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 1200,
          padding: '1.70rem 3.0rem',
        }}
      />
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
