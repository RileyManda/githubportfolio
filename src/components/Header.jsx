import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchField from './SearchField';


const Header = ({ setSearchKeyword }) => {

  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar" bg="dark">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: '#fff' }}>RileyManda</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <NavLink to="/" className="nav-link" activeClassName="active-link">
              Home
            </NavLink>
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
            <NavDropdown title="Filter by" id="navbarScrollingDropdown">
            </NavDropdown>
          </Nav>
          <SearchField setSearchKeyword={setSearchKeyword} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
Header.propTypes = {
  setSearchKeyword: PropTypes.func.isRequired,
};
export default Header;