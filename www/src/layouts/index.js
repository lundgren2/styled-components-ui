import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import { theme } from '../../../src/components'

import Header from '../components/Header'
import './index.css'

injectGlobal`
* {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`

const Main = styled('main')`
  padding-top: 5rem;
`

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={{ ...theme, mode: 'light' }}>
    <div>
      <Helmet
        title="styled-components-ui"
        meta={[
          { name: 'description', content: 'Styled Components UI' },
          { name: 'keywords', content: 'styled-components-ui' },
        ]}
      />
      <Header />
      <Main>{children()}</Main>
    </div>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
