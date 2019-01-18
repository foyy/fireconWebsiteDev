import React from 'react'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import SupressionSystem from '../components/imageComponents/SupressionSystem'
import TextBar from '../components/textBar'
import HochikiImage from '../components/imageComponents/manufacturers/HochikiImage'
import NfpaImage from '../components/imageComponents/NfpaImage'
import LicensingImage from '../components/imageComponents/LicensingImage'
import MinimalExtinguisher from '../components/imageComponents/MinimalExtinguisher'
import BlueprintImage from '../components/imageComponents/BlueprintImage'

const image = {
  flex: '1 0 40%',
  margin: '2%',
  marginTop: '5%',
  alignSelf: 'center',
}

const bigImage = {
  flex: '1 0 60%',
  margin: '2%',
  marginTop: '3%',
  alignSelf: 'center',
  borderRadius: '20%'
}

const text = {
  flex: '1 0 50%',
  margin: '2%',
  fontSize: '160%',
  alignSelf: 'center',
}


const smallText = {
  flex: '1 0 27%',
  margin: '2%',
  fontSize: '150%',
  alignSelf: 'center',
}


const bar = {
  flex: '0 1 90%',
  paddingTop: '25%',
  paddingBottom: '65%',
  marginTop: '5%'
}
const space = {
  flex: '1 1 100%',
  backgroundColor: 'white'
}
const wrapper = {
  maxHeight: '20px'
}
const singleLine = {
  flex: '1 0 98%',
  marginTop: '13%',
  marginBottom: '13%',
  textAlign: 'center',
  fontSize: '600%',
  fontFamily: 'times new roman, serif'
}

const IndexPage = () => (
  <Layout >

    <h1 style={singleLine}>Who We Are</h1>


    <div style={image}>
      <NfpaImage />
    </div>
    <p style={text}>
      Firecon of Texas is a family owned and operated life safety company that
      has nearly 3 generations worth of experience behind it in the state of Texas.
      Our technicians are knowledgeable and trained in servicing and installing
      the latest technologies in fire alarm and suppression systems.
      </p>

    <div style={bar}>
      <TextBar />
    </div>

    <p style={text}>
      Firecon of Texas offers high quality design, repairs, monitoring,
      additions, renovations, inspections and pressure testing. We prioritize safety and quality
      above all in every service that we offer. Protecting lives, property,
      and peace of mind is always our greatest goal.
    </p>
    <div style={image}>
      <MinimalExtinguisher />
    </div>



    <h1 style={singleLine}>Where We Work</h1>

    <div style={bigImage}>
      <BlueprintImage />
    </div>

    <p style={smallText}>
      <ul>
        <li>Commercial Offices</li>
        <li>Apartments</li>
        <li>Retail</li>
        <li>Hotels</li>
        <li>Schools</li>
        <li>Hospitals</li>
        <li>Data Centers</li>
        <li>Daycares</li>
        <li>Assisted Living</li>
        <li>Hotels</li>
        <li>And More</li>
      </ul>
    </p>


    <h1 style={singleLine}>Licenses</h1>




    <div style={smallText}>
      <p>Fire Alarm</p>
      <p>Special Hazards</p>
      <p>Extinguisher</p>
      <p>Monitoring</p>
      <p>Security</p>
    </div>

    <div style={image}>
      <LicensingImage />
    </div>




  </Layout>
)

export default IndexPage
