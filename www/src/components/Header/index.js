import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import Logo from './Logo'
import { Col, Row, Container } from '../../../../src/components'

// TODO: define constant for fixed nav
const Wrapper = styled('header')`
  background: lightcoral;
  /* background: lightgray; */
  border-bottom: 1px solid lightgray;
  position: fixed;
  padding: 1em 0;
  width: 100%;
  z-index: 2;
  transition: top 0.5s ease;
`
const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Nav = styled('nav')``

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0em 1em;
`

const H1 = styled('h1')`
  font-size: 2em;
  margin-bottom: 0;
`

const Header = () => (
  <Wrapper>
    <FlexContainer className="Header__container">
      <NavItem to="/">
        <Logo />
      </NavItem>

      <Nav>
        <NavItem to="page-2">Home</NavItem>
        <NavItem to="/">About</NavItem>
        <NavItem to="page-2">Contact</NavItem>
      </Nav>
    </FlexContainer>
  </Wrapper>
)

export default Header
