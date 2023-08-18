import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '../redux/projects/projectSlice';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { ProgrammingIcons, FrontendIcons, BackendIcons, FrameworkIcons, EditorIcons } from './Icons';


export default function Banner() {
    const projects = useSelector(state => state.home.projects);
    const isLoading = useSelector(state => state.home.isLoading);
    const dispatch = useDispatch();
    const techColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];

    useMemo(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const projectsWithTopics = projects.filter(project =>
        project.topics && project.topics.length > 0);

    const whiteIconStyles = {
        color: 'orange',
        fontSize: '30px',
    };

    return (
        <div className="banner-container" style={{ width: '100%', height: '90vh' }}>
            <Carousel data-bs-theme="dark">
                {projectsWithTopics.map((project, index) => (
                    <Carousel.Item key={index} data-bs-theme="light">
                        <Container>
                            <Row>
                                <Col>
                                    <Card style={{
                                        border: 'none',
                                        height: '90vh',
                                    }}>
                                        <h1>I am Riley Manda</h1>
                                        <p>A Full Stack Software Engineer with a passion for building mobile & web applications</p>
                                        <Stack gap={3}>
                                            <Stack direction="horizontal" gap={3}>
                                                <Badge pill bg="dark">Programming languages</Badge>
                                                {ProgrammingIcons.map((icon, index) => (
                                                    <div key={index} className="p-2 white-icon">
                                                        {icon.icon({ style: whiteIconStyles, title: icon.label })}
                                                    </div>
                                                ))}
                                            </Stack>
                                            <Stack direction="horizontal" gap={3}>
                                                <Badge pill bg="dark">Programming languages</Badge>
                                                {FrontendIcons.map((icon, index) => (
                                                    <div key={index} className="p-2 white-icon">
                                                        {icon.icon({ style: whiteIconStyles, title: icon.label })}
                                                    </div>
                                                ))}
                                            </Stack>
                                            <Stack direction="horizontal" gap={3}>
                                                <Badge pill bg="dark">Programming languages</Badge>
                                                {BackendIcons.map((icon, index) => (
                                                    <div key={index} className="p-2 white-icon">
                                                        <icon.icon style={whiteIconStyles} title={icon.label} />
                                                    </div>
                                                ))}
                                            </Stack>
                                            <Stack direction="horizontal" gap={3}>
                                                <Badge pill bg="dark">Programming languages</Badge>
                                                {FrameworkIcons.map((icon, index) => (
                                                    <div key={index} className="p-2 white-icon">
                                                        <icon.icon style={whiteIconStyles} title={icon.label} />
                                                    </div>
                                                ))}
                                            </Stack>
                                            <Stack direction="horizontal" gap={3}>
                                                <Badge pill bg="dark">IDEs</Badge>
                                                {EditorIcons.map((icon, index) => (
                                                    <div key={index} className="p-2 white-icon">
                                                        <icon.icon style={whiteIconStyles} title={icon.label} />
                                                    </div>
                                                ))}
                                            </Stack>
                                        </Stack>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{
                                        border: 'none',
                                        height: '90vh'
                                    }}>
                                        <Row>
                                            <Col>
                                                <p> <b>{project.name}</b></p>
                                                {project.topics.map((tech, index) => (
                                                    <Badge pill key={index} bg={techColors[index % techColors.length]} style={{ fontSize: '12px' }} >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                                <p>{project.description}</p>
                                            </Col>
                                            <Col md="auto">
                                                <Stack direction="vertical" gap={3}>
                                                    <iframe
                                                        title={`Project Preview ${index}`}
                                                        src={project.homepage}
                                                        style={{ width: '100%', height: '70vh', border: 'none' }}
                                                    />
                                                </Stack>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
