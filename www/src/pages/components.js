import React from 'react'
import Link from 'gatsby-link'
import { Col, Row, Container } from '../../../src/components'

const ComponentsPage = () => (
  <Container>
    <Row>
      <Col sm={12} md={6}>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Col>
      <Col sm={12} md={6}>
        <h1>Test grid</h1>
      </Col>
    </Row>
  </Container>
)

export default ComponentsPage
