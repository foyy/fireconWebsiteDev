import React from 'react'
import { Link } from 'gatsby'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import ContactEmail from '../components/contactEmail'
import Checkout from '../components/checkout'
import 'bootstrap/dist/css/bootstrap.min.css'

const About = () => (
  <Layout>
    <h1>Pay your invoices below </h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et nunc
      vel arcu fringilla elementum. Pellentesque id elementum nibh. Donec eget
      fermentum nulla, non fringilla quam. Ut volutpat, leo sed accumsan
      ullamcorper, lectus elit mollis eros, nec ullamcorper lacus diam in elit.
    </p>
    <br />
    <Checkout
      style={{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    />
  </Layout>
)

export default About
