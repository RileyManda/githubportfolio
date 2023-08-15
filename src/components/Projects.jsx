import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '../redux/projects/projectSlice';
import ProjectCard from './ProjectCard';
import AppLogo from '../assets/app-logo.svg';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { format } from 'date-fns';

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

  const projectsWithTopics = projects.filter(project => project.topics && project.topics.length > 0);
  // const projectsWithHomepage = projects.filter(project => project.homepage && project.homepage !== '');
  const formatDate = (date) => {
    return format(new Date(date), 'dd MMM yyyy');
  };

  return (
    <div>
      <Container>
        <Row xs="auto" className="justify-content-center">
          {projectsWithTopics.map((project, index) => (
            <Col key={index} xs={12} sm={3} md={4} lg={4}>
              <ProjectCard
                applogo={AppLogo}
                title={project.name}
                description={project.description || 'Default Description'}
                demo={project.demo || ''}
                github={project.url}
                techarray={project.topics || []}
                updated={formatDate(project.updated_at)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
