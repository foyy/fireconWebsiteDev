import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/layout'
import Manufacturers from '../components/manufacturers'
import SupressionSystem from '../components/imageComponents/SupressionSystem'
import FireAlarm from '../components/imageComponents/FireAlarm'
import RowOfRed from '../components/imageComponents/RowOfRed'


const text = {
  flex: '1 1 40%',
  marginBottom: '6%',
  marginTop: '6%',
  textAlign: 'center',
  fontSize: '400%'
}
const image = {
  flex: '1 1 55%',
  paddingTop: '1 1 45%',
  maxHeight: '23rem',
  maxWidth: '23rem',
  marginBottom: '6%',
  marginTop: '6%',
  borderStyle: 'solid',
  borderWidth: '15px',
  borderColor: 'Black',
}

const space = {
  flex: '1 1 100%',
  height: '100px',
  marginBottom: '14%',
  marginTop: '14%',
  textAlign: 'center'
}

const imageRow = {
  maxHeight: '25rem',
  maxWidth: '25rem',
}

const heading = {
  fontSize: '400%',
}
const Systems = () => (
  <Layout>
    <div style={space}>

      <p style={heading}>Firecon Systems</p>
    </div>
    <h1 style={text}>Fire Alarm</h1>
    <div style={image}>
      <FireAlarm />
    </div>

    <div style={image}>
      <SupressionSystem />
    </div>
    <h1 style={text}>Fire Suppression</h1>

    <h1 style={text}>Extinguishers</h1>
    <div style={image}>
      <RowOfRed style={imageRow} />
    </div>



    <Manufacturers />
  </Layout>
)

export default Systems
