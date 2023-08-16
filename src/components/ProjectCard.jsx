import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';


const techColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];

const ProjectCard = ({ applogo, title, description, demo, github, techarray, created, updated }) => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const handleDemoClick = () => {
        window.open(demo, '_blank');
    };

    const handleGithubClick = () => {
        window.open(github, '_blank');
    };


    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };
    return (
        <div>
            <Card style={{ width: '18rem', marginBottom: '3rem', height: isAccordionOpen ? 'auto' : '550px' }}
                border="warning">
                <Card.Img variant="top" src={applogo} />
                <Card.ImgOverlay style={{ height: '250px' }}>
                    <Badge bg="dark" style={{ opacity: '0.8' }}><Card.Title style={{ fontSize: '18px' }}>{title}</Card.Title></Badge>
                </Card.ImgOverlay>

                <Card.Body>

                    <Accordion style={{ width: '100%', fontSize: '14px' }}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header onClick={toggleAccordion}>About</Accordion.Header>
                            <Accordion.Body>

                                <Card.Text>{description}</Card.Text>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <div className="badge-container">
                        {techarray.map((tech, index) => (
                            <Badge pill key={index} bg={techColors[index % techColors.length]} style={{ fontSize: '12px' }} >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                  
                </Card.Body>
                <Card.Footer bg="dark">
                    <Stack direction="horizontal" gap={3}>
                        <Button onClick={handleDemoClick} size="sm" variant="info"><FontAwesomeIcon icon={faEye} style={{ color: '#fff' }} /></Button>
                        <Button onClick={handleGithubClick} size="sm" variant="info"><FontAwesomeIcon icon={faCodeCompare} style={{ color: '#fff' }} /></Button>
                        <small className="text-muted" style={{ fontSize: '9px', fontWeight: 'bold' }}>Created: {created}</small>
                        <div className="vr" />
                        <small className="text-muted" style={{ fontSize: '9px', fontWeight: 'bold' }}>Updated: {updated}</small>


                    </Stack>
                </Card.Footer>

            </Card>
        </div>
    );
};
ProjectCard.propTypes = {
    applogo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    techarray: PropTypes.arrayOf(PropTypes.string).isRequired,
    updated: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
};

export default ProjectCard;