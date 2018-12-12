import React from 'react'
import { Link } from 'gatsby'
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap'

import Layout from '../components/layout'

// <form
//   class="pure-form pure-form-stacked"
//   method="POST"
//   action="https://formspree.io/hunterleeves@gmail.com"
// >
//   <input type="email" name="email" placeholder="Your email" />
//   <br />
//   <textarea name="message" placeholder="Test Message" />
//   <br />
//   <button type="submit">Send Test</button>
// </form>

const ContactEmail = () => (
  <Container className="App">
    <h2>Contact Firecon</h2>
    <Form
      className="form"
      method="POST"
      action="https://formspree.io/hunterleeves@gmail.com"
    >
      <Col>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Your email"
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="message" id="exampleText" />
        </FormGroup>
      </Col>
      <Button type="submit">Submit</Button>
    </Form>
  </Container>
)

export default ContactEmail
