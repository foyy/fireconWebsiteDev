import React from 'react'
import { Link } from 'gatsby'
import Navbar from '../components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/layout'
import ContactEmail from '../components/contactEmail'

const About = () => (
  <Layout>
    <h1>We'd Love To Hear From You</h1>
    <ContactEmail />
  </Layout>
)

export default About
