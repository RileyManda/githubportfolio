import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '../redux/projects/projectSlice';
import ProjectCard from './ProjectCard';
import AppLogo from '../assets/app-logo.svg';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Loader from './Loader';
import { format } from 'date-fns';
import SearchField from './SearchField';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

const Projects = ({ setSearchKeyword, searchKeyword }) => {
  const projects = useSelector(state => state.home.projects);
  const isLoading = useSelector(state => state.home.isLoading);

  const dispatch = useDispatch();

  useMemo(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (isLoading) {
    return <div><Loader /></div>;
  }

  const projectsWithTopics = projects.filter(project =>
    project.topics && project.topics.length > 0 && project.name.toLowerCase().includes(searchKeyword.toLowerCase()));

  const formatDate = (date) => {
    return format(new Date(date), 'MMM yyyy');
  };

  return (
    <div id="projects" className="project-container">
      <Container fluid>
        <div className="section-title">
          <h2>Projects</h2></div>

        <Navbar expand="lg" sticky="top" bg="dark" variant="dark" className="search-bar">
          <Nav>
            <NavDropdown title="Filter by:" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#react">React</NavDropdown.Item>
              <NavDropdown.Item href="#redux">
                Redux-toolkit
              </NavDropdown.Item>
              <NavDropdown.Item href="#js">Javascript</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#fs">
                Full-stack
              </NavDropdown.Item>
              <NavDropdown.Item href="#rr">
                Ruby|Rails
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <SearchField setSearchKeyword={setSearchKeyword} />
        </Navbar>


        <Stack gap={3}>
          <Row xs="auto" md="auto">
            {projectsWithTopics.map((project, index) => (
              <Col key={index} xs="auto">
                <ProjectCard
                  created={formatDate(project.created_at)}
                  applogo={AppLogo}
                  title={project.name}
                  description={project.description || 'Project Description'}
                  demo={project.homepage}
                  github={project.html_url}
                  techarray={project.topics || []}
                  updated={formatDate(project.updated_at)}
                />
              </Col>
            ))}
          </Row>
        </Stack>
      </Container>
    </div>
  );
};

Projects.propTypes = {
  setSearchKeyword: PropTypes.func.isRequired,
  searchKeyword: PropTypes.string.isRequired,
};

export default Projects;