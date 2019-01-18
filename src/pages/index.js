import React from 'react'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import SupressionSystem from '../components/imageComponents/SupressionSystem'
import TextBar from '../components/textBar'
import HochikiImage from '../components/imageComponents/manufacturers/HochikiImage'
import NfpaImage from '../components/imageComponents/NfpaImage'
import LicensingImage from '../components/imageComponents/LicensingImage'
import MinimalExtinguisher from '../components/imageComponents/MinimalExtinguisher'


const image = {
  flex: '1 0 40%',
  margin: '2%',
  marginTop: '5%',
  alignSelf: 'center',
}

const bigImage = {
  flex: '1 0 60%',
  margin: '2%',
  marginTop: '5%',
  alignSelf: 'center',
  borderRadius: '20%'
}

const text = {
  flex: '1 0 50%',
  margin: '2%',
  fontSize: 'large',
  alignSelf: 'center',
}


const smallText = {
  flex: '1 0 27%',
  margin: '2%',
  fontSize: 'large',
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
  marginTop: '15%',
  marginBottom: '15%',
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
      Firecon of Texas is a family owned, operational life safety company that
      has nearly 3 generations worth of experience behind it in the state of Texas.
      Our technicians are knowledgeable and trained in servicing and installing
      the latest technologies in fire alarm and suppression systems.
      </p>

    <div style={bar}>
      <TextBar />
    </div>

    <p style={text}> More about us info here
      More about us info here more about us info here more about us info here
      More about us info here more about us info here more about us info here
      More about us info here more about us info here more about us info here
      More about us info here more about us info here more about us info here
      More about us info here more about us info here more about us info here
      more about us info here
      More about us info here more about us info here more about us info here
      more about us info here
      more about us info here
      More about us info here
      More about us info here
      more about us info here
      more about us info here
      more about us info here
      </p>
    <div style={image}>
      <MinimalExtinguisher />
    </div>



    <h1 style={singleLine}>Where We Work</h1>

    <div style={bigImage}>
    </div>

    <p style={smallText}>
      <ul>
        <li>Location wHere</li>
        <li>Location Here</li>
        <li>Location Here</li>
        <li>Location Here</li>


      </ul>
    </p>


    <h1 style={singleLine}>Licensing</h1>




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
