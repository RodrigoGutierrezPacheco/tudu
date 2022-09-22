import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Contador from '../Contador';

const NavbarComponent = (props) => {
	return (
		<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Biuri Emex</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Tareas: <Contador {...props}/></Nav.Link>
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
	)
}

export default NavbarComponent;