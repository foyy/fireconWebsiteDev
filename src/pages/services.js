import React from 'react'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactEmail from '../components/contactEmail'
import LicensingImage from '../components/imageComponents/LicensingImage'
import SupressionSystem from '../components/imageComponents/SupressionSystem'
import InspectionImage from '../components/imageComponents/InspectionImage'


const image = {
  flex: '1 0 100%',
  margin: '5px',
  marginTop: '5%',
}
const text = {
  flex: '1 0 20%',
  margin: '5px',
  fontSize: '250%',
  paddingTop: '4%',
  listStyleType: 'none',
  alignSelf: 'center',
}

const textTwo = {
  alignSelf: 'center',
  flex: '1 0 90%',
  margin: '5px',
  paddingTop: '4%',
  fontSize: '350%',
  textAlign: 'center',
}

const Services = () => (
  <div>
    <Layout>
      <h2 style={textTwo}>Services We Offer</h2>
      <div style={image}>
        <img src="https://cdn.pixabay.com/photo/2015/03/11/16/51/security-668906_960_720.jpg" alt="" />
      </div>
      <ul style={text}>
        <li>Design</li>
        <li>Sales</li>
        <li>Repair</li>
        <li>Monitoring</li>
        <li>Additions</li>
        <li>Renovations</li>
        <li>Inspections</li>
        <li>Presure Testing</li>
      </ul>

    </Layout>
  </div>
)

export default Services
