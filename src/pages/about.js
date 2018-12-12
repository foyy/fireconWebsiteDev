import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import ContactEmail from '../components/contactEmail'

const About = () => (
  <Layout>
    <h1>HERE IS ALL THE COOL FIRECON INFORMATION</h1>

    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/">Go Home</Link>
    <ContactEmail />
  </Layout>
)

export default About
