import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '../redux/projects/projectSlice';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';


export default function Banner() {
    const projects = useSelector(state => state.home.projects);
    const isLoading = useSelector(state => state.home.isLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const projectsWithTopics = projects.filter(project =>
        project.topics && project.topics.length > 0);

    return (
        <div className="banner-container">
            <Carousel>
                {projectsWithTopics.map((project, index) => (
                    <Carousel.Item key={index}>
                        <Container>
                            <Row>
                                <Col>
                                    <Card style={{
                                        width: '100%',
                                        height: '100%',
                                        border: 'none',
                                    }}>
                                        <h1>I am Riley Manda</h1>
                                        <p>A Full Stack Software Engineer</p>
                                        <Stack direction="horizontal" gap={3}>
                                            {project.techStack && project.techStack.map((tech, techIndex) => (
                                                <Badge
                                                    className="tech-stack-container"
                                                    key={techIndex}>
                                                    <span className="tech-stack">{tech}</span>
                                                </Badge>
                                            ))}
                                        </Stack>


                                        <Stack direction="horizontal" gap={3}>
                                            <div className="p-2">A</div>
                                            <div className="p-2">B</div>
                                            <div className="p-2">C</div>
                                        </Stack>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{
                                        width: '100%',
                                        height: '100%',
                                        border: 'none',
                                    }}>
                                        <Row>
                                            <Col>
                                                <p>{project.appTitle}</p>
                                            </Col>


                                            <Col>
                                                <Image
                                                    className="d-block w-100"
                                                    src={project.projectImg}
                                                    alt={`Slide ${index + 1}`}
                                                    style={{
                                                        width: '800px',
                                                        height: '460px',
                                                    }} />
                                                <p>{project.description}</p>
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
