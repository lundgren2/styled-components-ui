import React from 'react'
import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import PropTypes from 'prop-types'

const color = props =>
  theme.variants('mode', 'variant', {
    default: { light: props.theme.colors.primary, dark: 'darkgray' },
    primary: { light: 'blue', dark: 'darkblue' },
    success: { light: 'green', dark: 'darkgreen' },
    warning: { light: 'orange', dark: 'darkorange' },
  })

const commonStyle = css`
  color: ${color};
  ${props =>
    props.alt && `padding-bottom: .25em; border-bottom: 2px solid black;`};
`

const H1 = styled('h1')`
  ${commonStyle};
  font-size: 3em;
  margin-bottom: 0.5em;
`

H1.propTypes = {
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning']),
}

H1.defaultProps = {
  variant: 'default',
}

const H2 = styled('h2')`
  ${commonStyle};
  font-size: 2.5em;
  margin-bottom: 0.5em;
`
const H3 = styled('h3')`
  ${commonStyle};
  font-size: 2em;
  margin-bottom: 0.5em;
`
const H4 = styled('h4')`
  ${commonStyle};
  font-size: 1.5em;
  margin-bottom: 0.75em;
`
const H5 = styled('h5')`
  font-size: 1em;
  margin-bottom: 0.75em;
  ${commonStyle};
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
