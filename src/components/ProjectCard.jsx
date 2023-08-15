import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion';

const techColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

const ProjectCard = ({ applogo, title, description, demo, github, techarray, created, updated }) => {

    const handleDemoClick = () => {
        window.open(demo, '_blank');
    };

    const handleGithubClick = () => {
        window.open(github, '_blank');
    };
    return (
    <Card style={{ width: '18rem' }} border="info">
        <Card.Header>Created on: {created}</Card.Header>
        <Card.Img variant="top" src={applogo} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Description</Accordion.Header>
                        <Accordion.Body>
                            
            <Card.Text>{description}</Card.Text>
                            </Accordion.Body>
                       </Accordion.Item>
               </Accordion>
               <div className="badge-container">
            <Stack direction="vertical" gap={1}>
                {techarray.map((tech, index) => (
                    <Badge pill key={index} bg={techColors[index % techColors.length]}>
                        {tech}
                    </Badge>
                ))}
            </Stack>
                </div>
                <Button variant="outline-info" onClick={handleDemoClick}><FontAwesomeIcon icon={faCircleRight} style={{ color: '#fff' }} /></Button>{' '}
                <Button variant="outline-info" onClick={handleGithubClick}><FontAwesomeIcon icon={faCircleRight} style={{ color: '#fff' }} /></Button>{' '}
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Updated at : {updated}</small>
        </Card.Footer>
    </Card>
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