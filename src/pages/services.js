import React from 'react'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactEmail from '../components/contactEmail'
import LicensingImage from '../components/imageComponents/LicensingImage'
import SupressionSystem from '../components/imageComponents/SupressionSystem'
import InspectionImage from '../components/imageComponents/InspectionImage'
import ServicesImage from '../components/imageComponents/ServicesImage'
import SprinklerImage from '../components/imageComponents/SprinklerImage'

const image = {
  flex: '1 0 90%',
  margin: '5px',
  marginTop: '5%',
}
const text = {
  flex: '1 0 70%',
  marginTop: '5%',
  marginBottom: '5%',
  fontSize: '255%',
  textAlign: 'center'

}

const textTwo = {
  alignSelf: 'center',
  flex: '1 0 100%',
  margin: '5px',
  paddingTop: '4%',
  fontSize: '350%',
  textAlign: 'center',
}
const space = {
  flex: '1 1 20%'
}

const Services = () => (
  <Layout>
    <h2 style={textTwo}>Services We Offer</h2>
    <div style={image}>
      <SprinklerImage />
    </div>


    <div style={text}>
      <p  >Design</p>
      <p >Sales</p>
      <p >Repair</p>
      <p >Monitoring</p>
      <p >Additions</p>
      <p >Renovations</p>
      <p >Inspections</p>
      <p >Pressure Testing</p>
    </div>

  </Layout>
)

export default Services
