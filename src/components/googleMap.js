import PropTypes from 'prop-types'
import React from 'react'
import Navbar from '../components/navbar'
import HeaderImage from '../components/imageComponents/headerImage'



const GoogleMap = () => (
  <div >
    <div class="mapouter" style={{ textAlign: 'right', height: '305px', width: '780px' }}>
      <div class="gmap_canvas" style={{ overflow: 'hidden', background: 'none! important', height: '305px', width: '780px' }}>
        <iframe width="780" height="305" id="gmap_canvas" src="https://maps.google.com/maps?q=firecon&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
        </iframe><a href="https://www.crocothemes.net">
        </a>
      </div>

    </div>
  </div>
)



export default GoogleMap
