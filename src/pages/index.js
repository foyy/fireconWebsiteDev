import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/imageComponents/image'
import Checkout from '../components/checkout'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactEmail from '../components/contactEmail'

const IndexPage = () => (
  <Layout>
    <h1>Firecon of Texas</h1>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Checkout />
    <ContactEmail />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
