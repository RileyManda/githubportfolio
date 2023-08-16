import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import App1 from '../assets/air-quality.png';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

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
        <div>
            <Carousel>
                {projects.map((project, index) => (
                    <Carousel.Item key={index}>
                        <Container>
                            <Row>
                                <Col>
                                    <Card style={{
                                        width: '100%',
                                        height: '80%',
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
                                      
                                    </Card>
                                </Col>
                                <Col>
                                    <p>{project.appTitle}</p>
                                    <img className="d-block w-100" src={project.projectImg} alt={`Slide ${index + 1}`} />
                                  
                                </Col>
                            </Row>
                        </Container>

                        <Carousel.Caption>
                            <h3>{project.appTitle}</h3>
                            <p>{project.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
