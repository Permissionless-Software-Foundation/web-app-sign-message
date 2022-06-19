/*
  Component for signing a message with a WIF private key.
*/

// Global npm libraries
import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

let _this

class SignMessage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      output: '',
      textInput: '',
      wallet: props.wallet,
      wif: '',
      msg: '',
      sig: false,
      bchAddr: '',
      slpAddr: ''
    }

    _this = this
  }

  render () {
    return (

      <>
        <Container>
          <Row>
            <Col>
              <p>
                This simple web app can be used to sign a message with a WIF
                private key. A WIF private key starts with the lettter 'K' or 'L'.
                Fill out the forms below, and you'll be presented
                with a signed message, proving cryptographically that you own
                the address associated with that private key.
              </p>
              <p>
                This app is useful for gaining access to
                the <a href='https://t.me/psf_vip' target='_blank' rel='noreferrer'>PSF VIP Telegram channel</a>. If
                you store your PSF tokens on a <a href='https://cloudflare-ipfs.com/ipfs/bafybeifu6fhskdqj3gvp5q3wh3idukhrxiyhrrja6biqrqcei7rj23esn4/' target='blank'>paper wallet</a>, you
                can use this app to sign the message 'verify' with the WIF from
                your paper wallet.
              </p>
              <br />
              <p>
                <b>
                  <span style={{ color: 'red' }}>
                    Be sure you trust the source serving you this app. If you get
                    this app from a hacker, they can use it to steal your BCH and
                    tokens!
                  </span> It's best to run this
                  app <a href='https://github.com/Permissionless-Software-Foundation/web-app-sign-message' target='_blank' rel='noreferrer'>from source code</a>.
                </b>
              </p>
            </Col>
          </Row>
          <Row>
            <Col className='text-break'>
              <Form>
                <Form.Group className='mb-3' controlId='wif'>
                  <Form.Label><b>Enter a WIF private key.</b></Form.Label>
                  <Form.Control type='text' placeholder='L2t9gKznAZpzsTGFL1P1HgjLbBFn4z5iGvcihVHUBMH2qGXihYv7' onChange={e => this.setState({ wif: e.target.value })} />
                </Form.Group>

                <Form.Group className='mb-3' controlId='message'>
                  <Form.Label><b>Enter a message to sign.</b></Form.Label>
                  <Form.Control type='text' placeholder='verify' onChange={e => this.setState({ msg: e.target.value })} />
                </Form.Group>

                <Button variant='primary' onClick={this.handleSignMessage}>
                  Sign Message
                </Button>
              </Form>
            </Col>
          </Row>
          <br />
          <Row>
            <Col style={{ textAlign: 'center' }}>
              {this.state.output}
            </Col>
          </Row>
        </Container>
      </>
    )
  }

  handleSignMessage () {
    try {
      const { wif, msg } = _this.state
      const bchjs = _this.state.wallet.bchjs
      // console.log('bchjs: ', bchjs)

      const sig = bchjs.BitcoinCash.signMessageWithPrivKey(wif, msg)

      const ecPair = bchjs.ECPair.fromWIF(wif)
      const bchAddr = bchjs.ECPair.toCashAddress(ecPair)
      const slpAddr = bchjs.SLP.Address.toSLPAddress(bchAddr)

      const output = (
        <>
          <p><b>Signature:</b> {sig}</p>
          <p><b>BCH Address:</b> {bchAddr}</p>
          <p><b>SLP Address:</b> {slpAddr}</p>
        </>
      )

      _this.setState({
        output
      })
    } catch (err) {
      console.log('Error in handleSignMessage(): ', err)
      _this.setState({
        balance: (<p style={{ color: 'red' }}>{`Error: ${err.message}`}</p>)
      })
    }
  }
}

export default SignMessage
