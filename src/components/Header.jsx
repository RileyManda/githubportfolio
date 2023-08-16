import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchField from './SearchField';


const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#">RileyManda</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
            <Nav>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </Nav>
            <NavDropdown title="Filter by" id="navbarScrollingDropdown">
            </NavDropdown>
          </Nav>
          <SearchField />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;