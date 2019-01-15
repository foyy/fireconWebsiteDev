import React from 'react'
import axios from 'axios'
import * as emailjs from 'emailjs-com';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

// hardcoded amount (in US cents) to charge users
// you could set this variable dynamically to charge different amounts
const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '3rem',
  boxShadow: '5px 5px 25px 0 rgba(46,61,73,.2)',
  backgroundColor: '#fff',
  borderRadius: '6px',
  maxWidth: '800px',
  textAlign: 'left'
}
const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#fff',
  outline: 'none',
  padding: '18px 60px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: '#B23711',
  borderRadius: '6px',
  letterSpacing: '1.5px',
  marginLeft: '10px',
  marginBottom: '5px'
}

const wrapper = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}

const form = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
}

const label = {
  display: 'flex',
  fontWeight: '1000'
}

const input = {
  width: '200%'
}



// Below is where the checkout component is defined.
// It has several functions and some default state variables.
const Checkout = class extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.invoiceInput = React.createRef();
    this.companyName = React.createRef();
    //STATE
    this.state = {
      disabled: false,
      buttonText: 'BUY NOW',
      paymentMessage: '',
      amount: 44,
      invoice: '',
      companyName: ''
    }
    this.handleChange = this.handleChange.bind(this);

  }


  resetButton() {
    this.setState({ disabled: false, buttonText: 'Pay Your Invoice Now!' })
  }

  componentDidMount() {
    console.log('here is my state->', this.state)
    this.stripeHandler = window.StripeCheckout.configure({
      // You’ll need to add your own Stripe public key to the `checkout.js` file.
      // key: 'pk_test_STRIPE_PUBLISHABLE_KEY',
      key: 'pk_test_sACrOzSJjY8jKgGu2ZQ9vBFo',
      image: 'https://res.cloudinary.com/foyy/image/upload/v1547325121/FCTX_Logo_Red.jpg',

      closed: () => {
        this.resetButton()
      },
    })


  }

  async openStripeCheckout(event) {
    event.preventDefault()
    //so they are forced to enter an amount
    if (this.state.amount > 0 && this.state.companyName.length > 0 && this.state.invoice.length > 0) {

      this.setState({ disabled: true, buttonText: 'WAITING...' })
      this.stripeHandler.open({
        name: 'Firecon Invoice Payment',
        amount: this.state.amount,
        description: `Invoice #${this.state.invoice} Payment`,
        billingAddress: true,
        zipCode: true,
        token: token => {
          let amount = this.state.amount
          let invoice = this.state.invoice
          let companyName = this.state.companyName
          fetch(
            `https://g0q0sby444.execute-api.us-east-1.amazonaws.com/dev/checkout`,
            {
              method: 'POST',
              mode: 'no-cors',
              body: JSON.stringify({
                token,
                amount,
                invoice,
                companyName
              }),
              headers: new Headers({
                'Content-Type': 'application/json',
              }),
            },
          )
            .then(res => {
              console.log('Transaction processed successfully, response from Stripe----->', res)
              this.resetButton()
              this.setState({ paymentMessage: 'Payment Successful!' })
              return res
            })
            .catch(error => {
              console.error('Error:', error)
              this.setState({ paymentMessage: 'Payment Failed' })
            })
        },
      })
    } else {
      //INSERT ERROR MODAL HERE
    }
  }

  changeAmount(event) {
    event.preventDefault()
    console.log('sending off!', this.state)
    // this.setState({
    //   amount: this.textInput.value * 100,
    //   invoice: this.invoiceInput.value
    // })
  }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    console.log('here is the name->', name)
    await this.setState({
      [name]: value,
    });
  }


  render() {
    let { invoice, amount, companyName } = this.state;
    return (
      <div style={wrapper}>
        <div style={cardStyles}>
          <button onClick={() => console.log('here is your state->', this.state)}></button>

          <h1 style={{ alignSelf: 'center' }}>Pay your Invoice Below</h1>
          <h5 style={{ paddingLeft: '12px' }}>You are required to input your Company Name, Invoice#, and Amount</h5>


          {/* new form----> */}
          <Form className="form" onSubmit={event => this.changeAmount(event)}>
            <Col>
              <FormGroup>
                <Label style={label}>Company Name</Label>
                <Input
                  type="text"
                  name="companyName"
                  id="companyName"
                  placeholder="Company Name"
                  style={input}
                  onChange={(e) => {
                    this.handleChange(e)
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label>Invoice</Label>
                <Input
                  type="text"
                  name="invoice"
                  id="invoice"
                  placeholder="Invoice # ex: 602-422"
                  style={input}
                  onChange={(e) => {
                    this.handleChange(e)
                  }}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label >Payment Amount</Label>

                <Input
                  type="number"
                  name="amount"
                  id="amount"
                  style={input}
                  onChange={(e) => {
                    this.handleChange(e)
                  }}
                />
              </FormGroup>
            </Col>
            <Button style={{ marginLeft: '14px' }}>Submit</Button>
          </Form>


          <button
            style={buttonStyles}
            onClick={event => this.openStripeCheckout(event)}
            disabled={this.state.disabled}
          >
            {this.state.buttonText}
          </button>
          {this.state.paymentMessage}
          <a href='https://stripe.com/'>
            <img src="data:image/jpeg;base64,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" style={{ float: 'left', maxHeight: '35px', maxWidth: '35px', paddingTop: '10px' }} />
            <p style={{ fontSize: '12px', marginTop: '5px' }}>Secure Payment. No information is stored and all payment is secured by Stripe LLC, leading payment provider for internet transactions</p>
          </a>
        </div>
      </div >
    )
  }
}

export default Checkout



{/* < form action = "" onSubmit = { event => this.changeAmount(event) } style = { form } > */ }
{/* <input name='amount' type='text' ref={(input) => this.textInput = input} />
            <input name='invoice' type='text' ref={(input) => this.invoiceInput = input} />
            <input name='invoice' type='text' ref={(input) => this.companyName = input} /> */}

{/* < input type = "submit" value = "Submit" style = {{ width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }} />
          </form > */}


    // var data = {
    //   service_id: '<gmail>',
    //   template_id: '<template_2VgsUDkQ_clone>',
    //   user_id: '<user_Ox28ZDXC8k3uwKZ9g3jcw>',
    //   template_params: {
    //     'invoice_number': 'James',
    //     'amount': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    //   }
    // };
    // axios({
    //   method: 'post',
    //   url: 'https://api.emailjs.com/api/v1.0/email/send',
    //   data: JSON.stringify(data),
    //   contentType: 'application/json'
    // }).then(() => {
    //   console.log('Your mail is sent!!!!!!!');
    // }).catch(err => {
    //   console.log('we done messed up', err)
    // })

    //  this works!
    // let templateParams = {
    //   'invoice_number': '555',
    //   'amount': 'a million'
    // }

    // emailjs.send('gmail', 'template_2VgsUDkQ_clone', templateParams, 'user_Ox28ZDXC8k3uwKZ9g3jcw')
    //   .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //   }, (err) => {
    //     console.log('FAILED...', err);
    //   });

