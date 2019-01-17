import React from 'react'
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap'


const contact = {
  marginTop: '5%',
}
const text = {
  textAlign: 'left',
  fontSize: '240%',
  marginBottom: '5%',
}

const ContactEmail = () => (
  <Container style={contact}>
    <h2 style={text}>We'd Love To Hear From You</h2>
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
          <Label>Phone #</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
          <span className="note">Format: 123-456-7890</span>
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="message" id="exampleText" />
        </FormGroup>
      </Col>
      <Button type="submit" style={{ backgroundColor: 'rgb(85 , 85, 85)', marginLeft: '13px' }}>Submit</Button>
    </Form>
  </Container>
)

export default ContactEmail
