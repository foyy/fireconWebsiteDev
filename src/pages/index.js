import React from 'react'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import SupressionSystem from '../components/imageComponents/SupressionSystem'
import TextBar from '../components/textBar'
import HochikiImage from '../components/imageComponents/manufacturers/HochikiImage'
import NfpaImage from '../components/imageComponents/NfpaImage'

const image = {
  flex: '1 0 40%',
  margin: '10px',
  marginTop: '5%',
  alignSelf: 'center',
}
const text = {
  flex: '1 0 50%',
  margin: '5px',
  fontSize: 'large',
  alignSelf: 'center',
}

const bar = {
  flex: '1 1 90%',
  paddingBottom: '43%',
  marginTop: '5%'
}
const space = {
  flex: '1 1 100%',
  backgroundColor: 'white'
}
const wrapper = {
  maxHeight: '20px'
}

const IndexPage = () => (
  <Layout>

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

  </Layout>
)

export default IndexPage
