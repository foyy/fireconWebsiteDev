import React from 'react'
import axios from 'axios'
import * as emailjs from 'emailjs-com';


// hardcoded amount (in US cents) to charge users
// you could set this variable dynamically to charge different amounts
const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
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

// Below is where the checkout component is defined.
// It has several functions and some default state variables.
const Checkout = class extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  state = {
    disabled: false,
    buttonText: 'BUY NOW',
    paymentMessage: '',
    amount: 0
  }

  resetButton() {
    this.setState({ disabled: false, buttonText: 'BUY NOW' })
  }

  componentDidMount() {
    this.stripeHandler = window.StripeCheckout.configure({
      // You’ll need to add your own Stripe public key to the `checkout.js` file.
      // key: 'pk_test_STRIPE_PUBLISHABLE_KEY',
      key: 'pk_test_sACrOzSJjY8jKgGu2ZQ9vBFo',

      closed: () => {
        this.resetButton()
      },
    })


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

    let templateParams = {
      'invoice_number': '555',
      'amount': 'a million'
    }

    emailjs.send('gmail', 'template_2VgsUDkQ_clone', templateParams, 'user_Ox28ZDXC8k3uwKZ9g3jcw')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });


  }

  async openStripeCheckout(event) {
    event.preventDefault()
    //so they are forced to enter an amount
    if (this.state.amount > 1) {

      this.setState({ disabled: true, buttonText: 'WAITING...' })
      this.stripeHandler.open({
        name: 'Invoice Payment',
        amount: this.state.amount,
        description: 'Invoice Payment',
        token: token => {
          let amount = this.state.amount
          fetch(
            `https://g0q0sby444.execute-api.us-east-1.amazonaws.com/dev/checkout`,
            {
              method: 'POST',
              mode: 'no-cors',
              body: JSON.stringify({
                token,
                amount,
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
    }
  }



  changeAmount(event) {
    event.preventDefault()
    this.setState({
      amount: this.textInput.value * 100
    })

  }


  render() {
    let textInput
    return (
      <div style={cardStyles}>
        <h4>Spend your Money!</h4>
        <p>
          Use any email, 4242 4242 4242 4242 as the credit card number, any 3
          digit number, and any future date of expiration.
        </p>
        <form action="" onSubmit={event => this.changeAmount(event)} >
          <input name='amount' type='text' ref={(input) => this.textInput = input} />
          <input type="submit" value="Submit" />
        </form >
        <button
          style={buttonStyles}
          onClick={event => this.openStripeCheckout(event)}
          disabled={this.state.disabled}
        >
          {this.state.buttonText}
        </button>
        {this.state.paymentMessage}
      </div >
    )
  }
}

export default Checkout
