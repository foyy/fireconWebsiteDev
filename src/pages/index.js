import React from 'react'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import SupressionSystem from '../components/imageComponents/SupressionSystem'
import TextBar from '../components/textBar'
import HochikiImage from '../components/imageComponents/manufacturers/HochikiImage'
import NfpaImage from '../components/imageComponents/NfpaImage'
import LicensingImage from '../components/imageComponents/LicensingImage'

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
      About us Information here. About us Information here About us Information here.
      About us Information here About us Information here About us Information here
      About us Information here About us Information here About us Information here
      About us Information here About us Information here About us Information here
      About us Information here About us Information here About us Information here About us Information here
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
      <img src="https://cdn.pixabay.com/photo/2017/05/27/22/25/fire-extinguisher-2349638_960_720.png" alt="" />
    </div>



    <h1 style={singleLine}>Where We Work</h1>

    <div style={bigImage}>
      <img src="https://cdn.pixabay.com/photo/2016/11/24/20/30/architecture-1857175_960_720.jpg" alt="" />
    </div>

    <p style={smallText}>
      <ul>
        <li>Location Here</li>
        <li>Location Here</li>
        <li>Location Here</li>
        <li>Location Here</li>


      </ul>
    </p>


    <h1 style={singleLine}>Licensing</h1>




    <div style={smallText}>
      TESTING TESTING TESTING TESTING TESTGIN
      TESTING TESTING TESTING TESTING TESTGIN
      TESTING TESTING TESTING TESTING TESTGIN
      TESTING TESTING TESTING TESTING TESTGIN
      TESTING TESTING TESTING TESTING TESTGIN
    TESTING TESTING TESTING TESTING TESTGIN
      </div>

    <div style={image}>
      <LicensingImage />
    </div>




  </Layout>
)

export default IndexPage
