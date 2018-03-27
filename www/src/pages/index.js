import React from 'react'
import Link from 'gatsby-link'
import { Col, Row, Container, H1, H2 } from '../../../src/components/index'

import Demo from '../components/Demo'

const IndexPage = () => (
  <Container>
    <Row>
      <Col sm={12} md={6}>
        <H1 alt>Hi people</H1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Col>
      <Col sm={12} md={6}>
        <Demo />
      </Col>
    </Row>

    <Row>
      <Col>
        <H2>Test grid</H2>
        <Row>
          <Col debug />
          <Col sm={3} debug />
          <Col sm={6} debug />
          <Col sm={3} debug />
          <Col xs={6} debug />
          <Col xs={6} debug />
        </Row>
      </Col>
    </Row>

    <Row>
      <Col>
        <H2>Buttons</H2>
        {/* <Button primary>Primary</Button> */}
      </Col>
    </Row>
  </Container>
)

export default IndexPage
