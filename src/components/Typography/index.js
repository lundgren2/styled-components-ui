import React from 'react'
import styled from 'styled-components'

const H1 = styled('h1')`
  font-size: 3em;
  margin-bottom: 0.5em;
`

const H2 = styled('h2')`
  font-size: 2.5em;
  margin-bottom: 0.5em;
`
const H3 = styled('h3')`
  font-size: 2em;
  margin-bottom: 0.5em;
`
const H4 = styled('h4')`
  font-size: 1.5em;
  margin-bottom: 0.75em;
`
const H5 = styled('h5')`
  font-size: 1em;
  margin-bottom: 0.75em;
`

const TypographyDemo = () => (
  <div>
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <H5>Heading 5</H5>
  </div>
)

export { H1, H2, H3, H4, H5, TypographyDemo }
