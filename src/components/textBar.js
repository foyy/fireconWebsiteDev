import React from 'react'
import BlackLogoImage from '../components/imageComponents/BlackLogoImage'
import WhiteLogoImage from '../components/imageComponents/WhiteLogoImage'
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

const bar = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  height: '50%',
  width: '100%',
  left: '0%',
  right: '3%',
  backgroundColor: '#B30924',
  paddingBottom: '2%',
  position: 'absolute',
  paddingTop: '2%',
}

const text = {
  flex: '1 0 40%',
  color: 'white',
  fontSize: '250%',
  textAlign: 'center',
  paddingTop: '1%',
  alignSelf: 'center',
}

const image = {
  flex: '1 0 40%',
  maxHeight: '230px',
  maxWidth: '230px',
  marginLeft: '3%',
  alignSelf: 'center',
}
// const text = {
//   alignSelf: 'center',
//   color: 'white',
// }

const TextBar = () => (
  <div >
    <div style={bar} >
      <div style={image}>
        <WhiteLogoImage />
      </div>
      <p style={text}>Protecting Lives, Property, and Peace of Mind</p>
    </div>
  </div>

)



export default TextBar
