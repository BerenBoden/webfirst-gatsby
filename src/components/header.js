import React, { useState, useEffect } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Logo from '../images/logo.png'

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleNav = () => {
    if(window.scrollY >= 70) {
      setNavbar(true);
    } 
    else{
      setNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNav)
  })
  return (
    <div>
    <Navbar fixed="top" light expand="sm" className={navbar ? 'active' : ''}>
        <NavbarBrand href="/"><img src={Logo} style={{width: '150px'}} alt=""/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
    </Navbar>
  </div>
  )
}


export default Header
