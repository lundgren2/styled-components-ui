import React, { Component } from 'react'
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

class TemplateWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode: false,
    }
  }

  render() {
    const { children } = this.props
    const { darkMode } = this.state
    const mode = darkMode ? 'dark' : 'light'

    return (
      <ThemeProvider theme={{ ...theme, mode }}>
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
          <button onClick={this.toggleMode}>Toggle darkmode</button>
        </div>
      </ThemeProvider>
    )
  }

  toggleMode = () => {
    this.setState(prevState => {
      return { darkMode: !this.state.darkMode }
    })
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  darkMode: PropTypes.bool,
}

export default TemplateWrapper
