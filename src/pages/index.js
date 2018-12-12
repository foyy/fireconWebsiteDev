import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Checkout from '../components/checkout'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/navbar'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>
      hai coco it's me, be, you buy fire sounds and water jets in the not floor
      wall?
    </p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Checkout />

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
