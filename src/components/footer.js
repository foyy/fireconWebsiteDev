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
  alignSelf: 'center',
  color: 'white',
  fontFamily: 'times new roman, serif'
}

const iframe = {
  width: '35rem',
  height: '12rem',
  marginTop: '3%',
}

const Footer = () => (
  <div style={wrapper}>

    <div style={text}>
      <p>123-456-7890</p>
      <p>Footer address here</p>
      <ul>
        <li>  Footer Text here </li>
        <li>  Footer Text here </li>
        <li>  Footer Text here </li>
      </ul>
    </div >

    <iframe style={iframe} id="gmap_canvas" src="https://maps.google.com/maps?q=firecon&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
    </iframe>
  </div>

)



export default Footer
