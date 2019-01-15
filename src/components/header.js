import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Navbar from '../components/navbar'
import HeaderImage from '../components/imageComponents/headerImage'
import Image from '../components/imageComponents/image'



const Header = ({ siteTitle }) => (
  <div className='header'>
    {/* <div className="header">
      testing this css module stuff
    </div> */}
    <Navbar />
    <HeaderImage />

    {/* <div style={{
      margin: '0 auto',
      padding: '1.45rem 1.0875rem',
    }}>


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
    </div> */}
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
