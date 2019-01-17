import PropTypes from 'prop-types'
import React from 'react'
import Navbar from '../components/navbar'
import HeaderImage from '../components/imageComponents/headerImage'

const bar = {
  backgroundColor: 'rgba(202, 9, 41,.9)',
  minHeight: '10rem',
  width: '100%',
  display: 'absolute',
  fontSize: '300%',
}

const text = {
  color: 'rgba(25, 25, 25,.9)',
  textAlign: 'center',
}

const Header = ({ siteTitle, barText }) => (
  <div className='header'>
    {/* <div className="header">
      testing this css module stuff
    </div> */}
    <Navbar />

    <HeaderImage />
    {/* <div style={bar}>
      <p style={text}> {barText}</p>
    </div> */}


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
