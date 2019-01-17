import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children, barText }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet >
        <Header className='r1c1' siteTitle={data.site.siteMetadata.title} barText={barText} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            minWidth: 200,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            flexFlow: 'row wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {children}
        </div>
        <Footer style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          flexFlow: 'row wrap',
          justifyContent: 'center',
          alignItems: 'center'
        }} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
