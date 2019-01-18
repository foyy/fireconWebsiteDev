import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../../components/layout'
import Manufacturers from '../../components/manufacturers'
import SupressionSystem from '../../components/imageComponents/SupressionSystem'

const text = {
  flex: '1 1 40%',
  marginBottom: '10%',
  marginTop: '10%',
  textAlign: 'center',
  fontSize: '200%'
}
const image = {
  flex: '1 1 55%',
  paddingTop: '1 1 45%',
  maxHeight: '45%',
  maxWidth: '45%',
}

const space = {
  flex: '1 1 100%',
  height: '100px',
  marginBottom: '14%',
  marginTop: '14%',
  textAlign: 'center'
}

const heading = {
  fontSize: '350%',
}

const FireAlarm = () => (
  <Layout>
    <div style={space}>
      <p style={heading}>Fire Alarm</p>
    </div>
    <h1 style={text}>FIre Alarm Text Information here</h1>
    <div style={image}>
      <SupressionSystem />
    </div>

    <Manufacturers />
  </Layout>
)

export default FireAlarm
