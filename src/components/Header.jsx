import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';

const Header = ({ homeRef, projectsRef, experienceRef }) => {
  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <Navbar expand="lg" sticky="top" variant="dark" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="/">
          RileyManda
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link onClick={() => scrollToRef(homeRef)} >Home</Nav.Link>
            <Nav.Link onClick={() => scrollToRef(projectsRef)}>Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToRef(experienceRef)}>Experience</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
Header.propTypes = {
  homeRef: PropTypes.object.isRequired,
  projectsRef: PropTypes.object.isRequired,
  experienceRef: PropTypes.object.isRequired,
};
export default Header;