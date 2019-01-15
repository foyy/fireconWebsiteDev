import React from 'react'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import SupressionSystem from '../components/imageComponents/SupressionSystem'
import GoogleMap from '../components/googleMap'



const IndexPage = () => (
  <Layout>
    <h1>Firecon of Texas</h1>
    <h2></h2>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <SupressionSystem />
    </div>
    <GoogleMap />

  </Layout>
)

export default IndexPage
