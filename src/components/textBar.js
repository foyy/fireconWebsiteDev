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
  paddingBottom: '10%',
  position: 'absolute',
  paddingBottom: '5%',
  paddingTop: '2%',
}

const text = {
  flex: '1 0 40%',
  color: 'white',
  fontSize: '400%',
  textAlign: 'center',
  paddingTop: '1%',
  alignSelf: 'center',
}

const image = {
  flex: '1 0 40%',
  maxHeight: '200px',
  maxWidth: '200px',
  marginLeft: '3%',
  marginTop: '1%',
  alignSelf: 'center',
}
// const text = {
//   alignSelf: 'center',
//   color: 'white',
// }

const TextBar = () => (
  <div>

    <div style={bar}>
      <div style={image}>
        <WhiteLogoImage />
      </div>
      <p style={text}>Company review or motto here</p>
    </div>
  </div>

)



export default TextBar
