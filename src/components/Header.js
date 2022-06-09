import React from 'react'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';

function Header() {
  return (
   <>
  {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">TODO-LIST</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="#features">HOME</Nav.Link>
      <Nav.Link href="#pricing">ABOUT</Nav.Link>
      <Nav.Link href="#deets">CONTACT US</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar> */}
     
     <div className="ui fixed menu">
       <div className="ui container center">
         <h1>TODO-LIST</h1>
       </div>
       </div> 
   </>
  )
}

export default Header
