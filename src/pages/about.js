import React from 'react'
import { Link } from 'gatsby'
import Navbar from '../components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/layout'
import ContactEmail from '../components/contactEmail'

const About = () => (
  <Layout>
    <h1>HERE IS ALL THE COOL FIRECON INFORMATION</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et nunc
      vel arcu fringilla elementum. Pellentesque id elementum nibh. Donec eget
      fermentum nulla, non fringilla quam. Ut volutpat, leo sed accumsan
      ullamcorper, lectus elit mollis eros, nec ullamcorper lacus diam in elit.
      Fusce rhoncus eros vitae mollis lacinia. Sed lectus ex, laoreet sed
      vestibulum non, tempor quis est. Maecenas imperdiet ipsum id tortor porta
      elementum. Nulla varius justo arcu, sit amet rutrum urna dignissim sit
      amet. Etiam in felis in mauris interdum convallis non in est. Suspendisse
      potenti. Praesent vitae massa posuere, lobortis ante quis, aliquam magna.
      Ut id ipsum lorem. Pellentesque habitant morbi tristique senectus et netus
      et malesuada fames ac turpis egestas. Curabitur aliquam pharetra leo vitae
      ultricies. Mauris vitae lacus erat. Integer tincidunt vehicula commodo.
      Fusce et pretium leo. Curabitur dapibus accumsan dolor. Sed euismod
      accumsan turpis et fermentum. Donec fringilla et neque a accumsan. Integer
      congue urna in odio volutpat elementum. Duis sem sapien, consequat in
      vulputate eu, blandit vitae odio. Sed feugiat pharetra ligula, euismod
      fringilla justo suscipit eget. Ut blandit, quam nec commodo dapibus, nunc
      dolor faucibus orci,
    </p>
    <ContactEmail />
  </Layout>
)

export default About
