import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import Logo from './Logo'

const Wrapper = styled('header')`
  background: lightcoral;
  margin-bottom: 1.45rem;
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  width: 960px;
  padding: 1.45rem 0rem;
  display: flex;
  align-items: center;
`

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
`

const H1 = styled('h1')`
  font-size: 2em;
  margin-bottom: 0;
`

const Header = () => (
  <Wrapper>
    <Container>
      <Logo />
    </Container>
  </Wrapper>
)

export default Header
