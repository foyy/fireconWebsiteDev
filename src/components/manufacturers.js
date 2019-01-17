import React from 'react'
import BlackLogoImage from '../components/imageComponents/BlackLogoImage'

// const wrapper = {
//   display: 'flex',
//   flexDirection: 'column',
//   flexWrap: 'wrap',
//   flexFlow: 'row wrap',
//   justifyContent: 'space-around',
//   backgroundColor: 'grey',
//   marginTop: '10%',
//   marginBottom: '2%'

// }

// const wrapper = {
//   maxHeight: '960px',
//   maxWidth: '960px'

// }


// const text = {
//   alignSelf: 'center',
//   color: 'white',
// }

const wrapper = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',
}

const image = {
  flex: '0 1 33%',
  backgroundColor: 'red',
}

const Manufacturers = () => (
  <div style={wrapper}>
    <p style={image}>TESTING <BlackLogoImage /></p>
    <p style={image}>TESTING <BlackLogoImage /></p>
    <p style={image}>TESTING <BlackLogoImage /></p>
    <p style={image}>TESTING <BlackLogoImage /></p>
    <p style={image}>TESTING <BlackLogoImage /></p>
    <p style={image}>TESTING <BlackLogoImage /></p>
  </div>
)



export default Manufacturers
