import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '../redux/projects/projectSlice';
import ProjectCard from './ProjectCard';
import AppLogo from '../assets/app-logo.svg';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const Projects = () => {
  const projects = useSelector(state => state.home.projects);
  const isLoading = useSelector(state => state.home.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container>
        <Row xs="auto" className="justify-content-center">
          {projects.map((project, index) => (
            <Col key={index} xs={12} sm={3} md={4} lg={4}>
              <ProjectCard
                applogo={AppLogo}
                title={project.name}
                description={project.description || 'Default Description'}
                demo={project.demo || ''}
                github={project.url}
                techarray={project.topics || []}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};


export default Projects;
