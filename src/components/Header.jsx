import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-scroll'; 

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" data-bs-theme="dark" bg="dark" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: '#fff' }}>
          RileyManda
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link>
              <Link to="home" smooth={true} duration={500} offset={-100}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="projects" smooth={true} duration={500} offset={-100}>
                Projects
              </Link>
            </Nav.Link>
            <NavDropdown title="Filter by" id="navbarScrollingDropdown">
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
