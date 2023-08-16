import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import App1 from '../assets/air-quality.png';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';

const projects = [
    {
        appTitle: 'Air Quality',
        projectImg: App1,
        description: 'Description for Air Quality project',
        techStack: ['reactjs', 'nodejs', 'expressjs', 'mongodb']
    },
    {
        appTitle: 'Air Quality',
        projectImg: App1,
        description: 'Description for Air Quality project',
        techStack: ['reactjs', 'nodejs', 'expressjs', 'mongodb']
    }
];

export default function Banner() {
    return (
        <div className="banner-container">
            <Carousel>
                {projects.map((project, index) => (
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
                                            {project.techStack.map((tech, techIndex) => (
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
                                                    }}/>
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
