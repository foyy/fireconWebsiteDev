import React from 'react'

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  backgroundColor: 'rgb(85 , 85, 85)',
  marginTop: '1%',
  marginBottom: '.5%',
}

const text = {
  color: 'white',
  fontFamily: 'times new roman, serif'
}

const iframe = {
  width: '35rem',
  height: '12rem',
  marginTop: '3%',
}

const indent = {
  marginLeft: '10%'
}


const Footer = () => (
  <div style={wrapper}>
    <ul style={text}>
      <h5 style={{ marginTop: '5%' }}>Spicewood:</h5>
      <li style={indent}>21300 Highway 71 West, Suite 400, Spicewood, Tx, 78669</li>
      <li style={indent}>Phone: 512-404-9155</li>
      <h5>San Antonio:</h5>
      <li style={indent}>11550 N. North Loop Rd. , San Antonio, 78216 </li>
      <li style={indent}>Phone: 210-258-4241</li>

      <li>Alarm License#: ACR2294663</li>
      <li>Extinguisher License#: ECR2295003</li>
    </ul >

    <iframe style={iframe} id="gmap_canvas" src="https://maps.google.com/maps?q=firecon&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
    </iframe>
  </div>

)



export default Footer
