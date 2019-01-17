import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../../components/layout'
import Manufacturers from '../../components/manufacturers'

const text = {
  flex: '1 1 100%',
  marginBottom: '10%',
  textAlign: 'center',
  fontSize: '200%'
}

const FireAlarm = () => (
  <Layout>
    <h1 style={text}>Fire Alarm Text Information here</h1>
    <Manufacturers />
  </Layout>
)

export default FireAlarm
