import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function NavbarDrk() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='mb-3'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/Users">About</Nav.Link>
            <Nav.Link as={NavLink} to="/archived">Blog</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
