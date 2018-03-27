import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import Logo from './Logo'
import { Col, Row, Container } from '../Grid'

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

/*
<header>
		<div id="header-container">
			<a id="AirBnBLogo" href="https://airbnb.design/" title="Airbnb Design" rel="home">
				<h1 class="logo">				<span class="screen-reader-only">Airbnb Design</span>
				</h1>			</a>
			<nav>
				<div class="menu-main-menu-container"><ul id="menu-main-menu" class="menu"><li><a href="https://airbnb.design/articles/">Articles</a></li>
<li><a href="https://airbnb.design/upcoming-events/">Events</a></li>
<li><a href="https://airbnb.design/video/">Videos</a></li>
<li><a href="https://airbnb.design/our-projects/">Projects</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-search"><a id="search" href="https://airbnb.design?s">
	<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" style="fill: #2b2b2b;height: 17px;width: 17px;"><path fill-rule="evenodd" d="M23.53 22.47l-6.807-6.808A9.455 9.455 0 0 0 19 9.5 9.5 9.5 0 1 0 9.5 19c2.353 0 4.502-.86 6.162-2.277l6.808 6.807a.75.75 0 0 0 1.06-1.06zM9.5 17.5a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path></svg>
	<span class="screen-reader-text">&nbsp;&nbsp;Search</span>
</a></li></ul></div>			</nav>
			<div id="hamburger">
				<div id="lines">
					<span></span>
					<span></span>
				</div>
				<div id="thex">
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
  </header>
  */
