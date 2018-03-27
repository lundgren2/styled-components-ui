import React from 'react'
import Link from 'gatsby-link'
import { Col, Row, Container } from '../../../src/components'

const SecondPage = () => (
  <Container>
    <Row>
      <Col>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Col>
    </Row>
  </Container>
)

export default SecondPage
