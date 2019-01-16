import React from 'react'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactEmail from '../components/contactEmail'
import LicensingImage from '../components/imageComponents/LicensingImage'
import SupressionSystem from '../components/imageComponents/SupressionSystem'
import InspectionImage from '../components/imageComponents/InspectionImage'


const image = {
  flex: '1 0 40%',
  margin: '5px',
  marginTop: '15%',
}
const text = {
  flex: '1 0 50%',
  margin: '5px',
  fontSize: '150%',
  paddingTop: '14%',
  listStyleType: 'none',
  alignSelf: 'center',
}

const textTwo = {
  alignSelf: 'center',
  flex: '1 0 50%',
  margin: '5px',
  paddingLeft: '35%',
  paddingTop: '14%',
  fontSize: '150%',
  listStyleType: 'none',
}

const Services = () => (
  <div>
    <Layout>
      <div style={image}>
        <LicensingImage />
      </div>
      <ul style={text}>
        <li>Design</li>
        <li>Sales</li>
        <li>Repair</li>
        <li>Monitoring</li>
      </ul>

      <ul style={textTwo}>
        <li>Additions</li>
        <li>Renovations</li>
        <li>Inspections</li>
        <li>Presure Testing</li>
      </ul>
      <div style={image}>
        <InspectionImage />
      </div>




      <br />


    </Layout>
  </div>
)

export default Services
