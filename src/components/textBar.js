import React from 'react'

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
  height: '26%',
  width: '100%',
  left: '0%',
  right: '3%',
  backgroundColor: '#9B211C',
  paddingBottom: '10%',
  position: 'absolute',
}

// const text = {
//   alignSelf: 'center',
//   color: 'white',
// }

const TextBar = () => (
  <div>
    <div style={bar}>
      <p>text here</p>
    </div>
  </div>

)



export default TextBar
