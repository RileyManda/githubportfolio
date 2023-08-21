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
    <div>
      <Container fluid>
        <SearchField setSearchKeyword={setSearchKeyword} />
        <Stack gap={3}>
          <Row xs="auto" className="justify-content-center p-2">
            {projectsWithTopics.map((project, index) => (
              <Col key={index} xs="auto">
                <ProjectCard
                  created={formatDate(project.created_at)}
                  applogo={AppLogo}
                  title={project.name}
                  description={project.description || 'Default Description'}
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
