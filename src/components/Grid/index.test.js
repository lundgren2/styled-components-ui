// @flow
/* eslint-disable no-console */
import React from 'react'
import ReactTestRenderer from 'react-test-renderer'
import { Page, Row, Col } from '.'

declare var it: any
declare var expect: any

const App = () => (
  <Page>
    <Row>
      <Col sm={8} smShift={2} lg={6} lgShift={3}>
        <h1>This is a column that is centered using the shift props</h1>
      </Col>
    </Row>
    <Row>
      <Col fluid sm={4}>
        <h1>Fluid Columns</h1>
      </Col>
      <Col fluid sm={4}>
        <p>A 12 column layout by default.</p>
      </Col>
      <Col fluid sm={4}>
        <Row divisions={24}>
          <Col sm={24}>
            <p>
              But you can change the amount of columns by adding the `divisions`
              property to a Row.
            </p>
            <p>It is fully embeddable as well!</p>
          </Col>
        </Row>
      </Col>
    </Row>
  </Page>
)

it('renders without proptype errors', () => {
  // Make sure that proptype errors cause test failures
  const error = console.error
  // $FlowFixMe: reassignment of console.error
  console.error = jest.fn(msg => {
    throw new Error(msg)
  })

  const renderer = ReactTestRenderer.create(<App />)
  expect(renderer.toJSON()).not.toBeNull()

  // $FlowFixMe: reassignment of console.error
  console.error = error
})

const BrokenProps = () => (
  <Page>
    <Row>
      <Col sm={8} smShift={'two'} lg={6} lgShift={3}>
        <h1>This is a column that is centered using the shift props</h1>
      </Col>
    </Row>
  </Page>
)

it('triggers proptype error', () => {
  let errorTriggered = false

  // Make sure that proptype errors cause test failures
  const error = console.error
  // $FlowFixMe: reassignment of console.error
  console.error = jest.fn(() => {
    errorTriggered = true
  })

  const renderer = ReactTestRenderer.create(<BrokenProps />)
  expect(renderer.toJSON()).not.toBeNull()
  expect(errorTriggered).toBe(true)

  // $FlowFixMe: reassignment of console.error
  console.error = error
})
