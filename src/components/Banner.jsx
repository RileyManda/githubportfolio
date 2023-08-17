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
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { BsBootstrapFill } from 'react-icons/bs';
import { SiMui } from 'react-icons/si';
import {DiRuby} from 'react-icons/di';
import {BiLogoPostgresql} from 'react-icons/bi';
import { FiFigma } from 'react-icons/fi';


export default function Banner() {
    const projects = useSelector(state => state.home.projects);
    const isLoading = useSelector(state => state.home.isLoading);
    const dispatch = useDispatch();
    const techColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];

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
                                        <p>I am a Full Stack Software Engineer with a passion for building mobile & web applications</p>

                                        <Stack direction="horizontal" gap={3}>
                                            <div className="p-2"><FaReact /></div>
                                            <div className="p-2"><FaNodeJs /></div>
                                            <div className="p-2"><BsBootstrapFill /></div>                
                                            <div className="p-2"><SiMui /></div>
                                            <div className="p-2"><DiRuby /></div>
                                            <div className="p-2"><BiLogoPostgresql /></div>
                                            <div className="p-2"><FiFigma /></div>
                                            <div className="p-2"><AiFillGithub /></div>
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
                                                <p>{project.name}</p>
                                                <Stack direction="vertical" gap={3}>
                                                    {project.topics.map((tech, index) => (
                                                        <Badge pill key={index} bg={techColors[index % techColors.length]} style={{ fontSize: '12px' }} >
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </Stack>
                                            </Col>


                                            <Col>
                                                <p>
                                                    {project.homepage}
                                                </p>
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
