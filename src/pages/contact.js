import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/layout'
import ContactEmail from '../components/contactEmail'

const About = () => (
  <Layout barText="We Would Love To Hear From You">
    <ContactEmail />
  </Layout>
)

export default About
