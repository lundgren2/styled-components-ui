import React from 'react'
import Link from 'gatsby-link'
import { Col, Row, Container, H1, H2 } from '../../../src/components/index'

import Demo from '../components/Demo'

const IndexPage = () => (
  <Container>
    <Row>
      <Col sm={12} md={6}>
        <H1>Hi people</H1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Col>
      <Col sm={12} md={6}>
        <H2>Test grid</H2>
      </Col>
    </Row>

    <Row>
      <Demo />
    </Row>
  </Container>
)

export default IndexPage
