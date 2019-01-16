import React from 'react'

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  backgroundColor: 'grey',
  marginTop: '10%',
  marginBottom: '2%'

}

const text = {
  alignSelf: 'center',
  color: 'white',
}

const Footer = () => (
  <div style={wrapper}>
    <div style={text}>
      <p>123-456-7890</p>
      <p>address here</p>
      <ul>
        <li>  Text here </li>
        <li>  Text here </li>
        <li>  Text here </li>
      </ul>
    </div >

    <div className="mapouter" style={{ textAlign: 'right', height: '300px', width: '780px' }}>
      <div className="gmap_canvas" style={{ overflow: 'hidden', background: 'none! important', height: '305px', width: '780px' }}>
        <iframe width="780" height="305" id="gmap_canvas" src="https://maps.google.com/maps?q=firecon&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
        </iframe><a href="https://www.crocothemes.net">
        </a>
      </div>
    </div>
  </div>

)



export default Footer
