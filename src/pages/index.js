import React from 'react'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import SupressionSystem from '../components/imageComponents/SupressionSystem'
import TextBar from '../components/textBar'
import HochikiImage from '../components/imageComponents/manufacturers/HochikiImage'

const image = {
  flex: '1 0 40%',
  margin: '10px',
  marginTop: '15%',
}
const text = {
  flex: '1 0 50%',
  margin: '5px',
  fontSize: 'large',
}

const bar = {
  flex: '1 0 90%',
  marginBottom: '34%',
  marginTop: '5%'


}

const IndexPage = () => (
  <div>
    <Layout>

      <div style={image}>
        <SupressionSystem />
      </div>
      <p style={text}>
        About us Information here. About us Information here About us Information here.
         About us Information here About us Information here About us Information here
          About us Information here About us Information here About us Information here
           About us Information here About us Information here About us Information here
         About us Information here About us Information here About us Information here About us Information here
      </p>
      <div style={bar}>
        <TextBar />
      </div>

      <p style={text}> More about us info here
        More about us info here more about us info here more about us info here
        More about us info here more about us info here more about us info here
        More about us info here more about us info here more about us info here
        More about us info here more about us info here more about us info here
        More about us info here more about us info here more about us info here
        more about us info here
        More about us info here more about us info here more about us info here
        more about us info here
        more about us info here
        More about us info here
        More about us info here
        more about us info here
        more about us info here
        more about us info here
      </p>
      <div style={image}>
        <SupressionSystem />
      </div>

    </Layout>
  </div>
)

export default IndexPage
