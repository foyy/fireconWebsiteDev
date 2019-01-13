import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/layout'
import Image from '../components/imageComponents/image'


const Systems = () => (
  <Layout>
    <div className="wrapper">
      <h1 className="centeredh1s">Fire Alarm</h1>
      <h1 className='centeredh1s'>Supressions</h1>
      <div className='manufacturers'>
        <h1 className='centeredh1s'>Manufacturers</h1>
        <div className="r1c1">
          <Image />
          <div className='r1c2'>
            <Image />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Systems
