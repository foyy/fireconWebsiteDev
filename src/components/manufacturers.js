import React from 'react'
import CwsiImage from '../components/imageComponents/manufacturers/CwsiImage'
import BlackLogoImage from '../components/imageComponents/BlackLogoImage'
import FikeImage from '../components/imageComponents/manufacturers/FikeImage'
import FireLiteImage from '../components/imageComponents/manufacturers/FireLiteImage'
import HochikiImage from '../components/imageComponents/manufacturers/HochikiImage'
import MircomImage from '../components/imageComponents/manufacturers/MircomImage'
import ProtectoWireImage from '../components/imageComponents/manufacturers/ProtectoWireImage'
import SilentKnightImage from '../components/imageComponents/manufacturers/SilentKnightImage'
import SouthwestImage from '../components/imageComponents/manufacturers/SouthwestImage'
import SystemSensor from '../components/imageComponents/manufacturers/SystemSensor'
import WheelockImage from '../components/imageComponents/manufacturers/WheelockImage'
import ZeroBurn from '../components/imageComponents/manufacturers/ZeroBurn'





const wrapper = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '80%',
  height: '20%',
  margin: 'auto'
}

const image = {
  flex: '1 1 15%',
  margin: '5px',
  borderStyle: 'solid',
  borderWidth: '5px',
}

const text = {
  flex: '1 1 100%',
  fontSize: '400%',
  textAlign: 'center',
  margin: 'auto',
  alignSelf: ' center',
  justifyContent: 'center',
  fontFamily: 'times new roman, serif'
}

const space = {
  flex: '1 1 100%',
  backgroundColor: 'white'
}

const Manufacturers = () => (

  <div style={wrapper}>
    <p style={text}>Our Trusted Partners</p>
    <p style={space}></p>
    <p style={space}></p>
    <p style={space}></p>
    <p style={space}></p>

    <p style={image}> <FikeImage /> </p>
    <p style={image}> <CwsiImage /></p>
    <p style={image}> <FireLiteImage /></p>
    <p style={image}> <HochikiImage /></p>
    <p style={image}> <MircomImage /></p>
    <p style={image}> <ProtectoWireImage /></p>
    <p style={image}> <SilentKnightImage /></p>
    <p style={image}> <SystemSensor /></p>
    <p style={image}> <WheelockImage /></p>
    <p style={image}> <ZeroBurn /></p>
  </div>

)



export default Manufacturers
