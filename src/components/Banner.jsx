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
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { SiMui } from 'react-icons/si';
import { DiRuby, DiJavascript } from 'react-icons/di';
import { BiLogoPostgresql, BiLogoTailwindCss, BiLogoCss3 } from 'react-icons/bi';
import { SiPython, SiWebpack, SiAndroidstudio } from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';
import { FaJava, FaBootstrap } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaSass } from 'react-icons/fa';
import { TbBrandVscode } from 'react-icons/tb';



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
                                        height: '90vh'
                                    }}>
                                        <h1>I am Riley Manda</h1>
                                        <p>I am a Full Stack Software Engineer with a passion for building mobile & web applications</p>
                                        <Stack gap={3}>
                                        <Stack direction="horizontal" gap={3}>
                                                <Badge pill bg="dark">Programming languages</Badge>
                                            <div className="p-2"><DiJavascript /></div>
                                            <div className="p-2"><FaJava /></div>
                                            <div className="p-2"><SiPython /></div>
                                            </Stack>
                                            <Stack direction="horizontal" gap={3}>
                                                <Badge pill bg="dark">Front-end</Badge>
                                            <div className="p-2"><FaReact /></div>
                                            <div className="p-2"><FaBootstrap /></div>     
                                            <div className="p-2"><SiMui /></div>
                                            <div className="p-2"><SiWebpack /></div>
                                            <div className="p-2"><BiLogoTailwindCss /></div>
                                            <div className="p-2"><AiFillHtml5 /></div>
                                            <div className="p-2"><BiLogoCss3 /></div>
                                            <div className="p-2"><FaSass /></div>
                                            </Stack>

                                            <Stack direction="horizontal" gap={3}>
                                                <Badge pill bg="dark">Backend</Badge>
                                            <div className="p-2"><FaNodeJs /></div>
                                            <div className="p-2"><DiRuby /></div>
                                            <div className="p-2"><BiLogoPostgresql /></div>
                                            </Stack>
                                            <Stack direction="horizontal" gap={3}>
                                                <Badge pill bg="dark">UX Design</Badge>
                                            <div className="p-2"><FiFigma /></div>
                                            </Stack>
                                            <Stack direction="horizontal" gap={3}>
                                                <Badge pill bg="dark">Version control</Badge>
                                            <div className="p-2"><AiFillGithub /></div>
                                           
                                            </Stack>
                                            <Stack direction="horizontal" gap={3}>
                                                <Badge pill bg="dark">Editors</Badge>
                                                <div className="p-2"><TbBrandVscode /></div>
                                                <div className="p-2"><SiAndroidstudio /></div>
                                                

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
