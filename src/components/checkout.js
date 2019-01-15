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
  maxWidth: '400px',
}
const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#fff',
  outline: 'none',
  padding: '12px 60px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: 'rgb(255, 178, 56)',
  borderRadius: '6px',
  letterSpacing: '1.5px',
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

          <h4>Spend your Money!</h4>
          <p>
            Use any email, 4242 4242 4242 4242 as the credit card number, any 3
            digit number, and any future date of expiration.
        </p>

          {/* new form----> */}
          <Form className="form" onSubmit={event => this.changeAmount(event)}>
            <Col>
              <FormGroup>
                <Label>Company Name</Label>
                <Input
                  type="text"
                  name="companyName"
                  id="companyName"
                  placeholder="Company Name"

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
                  onChange={(e) => {
                    this.handleChange(e)
                  }}
                />
              </FormGroup>
            </Col>
            <Button>Submit</Button>
          </Form>


          <button
            style={buttonStyles}
            onClick={event => this.openStripeCheckout(event)}
            disabled={this.state.disabled}
          >
            {this.state.buttonText}
          </button>
          {this.state.paymentMessage}
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

