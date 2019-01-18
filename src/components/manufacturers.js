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
import SupressionSystem from '../components/imageComponents/SupressionSystem'



const wrapper = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '80%',
  height: '20%',
  margin: 'auto',
  marginTop: '15%'
}

const image = {
  flex: '1 0 22%',
  margin: '5px',
  borderStyle: 'solid',
  borderWidth: '5px',
  borderColor: 'black'
}

const text = {
  flex: '1 1 100%',
  fontSize: '300%',
  textAlign: 'center',
  margin: 'auto',
  alignSelf: ' center',
  justifyContent: 'center',
  fontFamily: 'helvetica, serif',
  fontWeight: 'bold',
}

const space = {
  flex: '1 1 100%',
  backgroundColor: 'white'
}

const Manufacturers = () => (

  <div style={wrapper}>
    <p style={text}>Our Trusted Manufacturers</p>
    <p style={space}></p>
    <p style={space}></p>
    <p style={space}></p>
    <p style={space}></p>
    <a href="https://www.fike.com/solutions/fire-protection/fire-suppression/" style={image}>
      <FikeImage /> </a>
    <a href="http://www.cooperindustries.com/content/public/en/products.html" style={image}> <WheelockImage /></a>
    <a href="https://www.hochikiamerica.com/fire-alarm" style={image}> <HochikiImage /></a>
    <a href="https://www.mircom.com/" style={image}> <MircomImage /></a>
    <a href="http://www.cwsifire.com/" style={image}> <CwsiImage /></a>
    <a href="https://www.protectowire.com/" style={image}> <ProtectoWireImage /></a>
    <a href="https://www.linkedin.com/company/zeroburn/" style={image}>  <ZeroBurn /></a>
    <a href="https://www.systemsensor.com/en-us/Pages/welcome.aspx" style={image}> <SystemSensor /></a>
    <a href="https://www.honeywell.com/buildings/security-and-fire" style={image}> <FireLiteImage /></a>
    <a href="https://www.honeywell.com/buildings/security-and-fire" style={image}><SilentKnightImage /></a>
  </div >

)



export default Manufacturers
