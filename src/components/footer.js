/*
  A footer section for the SPA
*/

// Global npm libraries
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const IPFS_CID = 'bafybeig4vvzxgxcrc6xoccqeq27xd3bzpiw6725gnj7aq23ak5n4vituq4'

class Footer extends React.Component {
  render () {
    return (
      <Container style={{ backgroundColor: '#ddd' }}>
        <Row style={{ padding: '25px' }}>
          <Col>
            <h6>Site Mirrors</h6>
            <ul>
              <li><a href={`https://${IPFS_CID}.ipfs.dweb.link/`} target='_blank' rel='noreferrer'>Filecoin</a></li>
            </ul>
          </Col>

          <Col>
            <h6>Source Code</h6>
            <ul>
              <li><a href='https://github.com/Permissionless-Software-Foundation/web-app-sign-message' target='_blank' rel='noreferrer'>GitHub</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Footer
