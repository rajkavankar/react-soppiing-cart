import React from "react"
import { Navbar, Container, Nav, Badge } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const Header = () => {
  const cart = useSelector((state) => state.cart.products)
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          Shopping cart
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link as={NavLink} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to='/cart'>
              Cart <FaShoppingCart /> <Badge pill>{cart.length}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
