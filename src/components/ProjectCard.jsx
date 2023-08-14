import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

const techColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

const ProjectCard = ({ applogo, title, description, demo, github, techarray }) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={applogo} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Stack direction="vertical" gap={1}>
                {techarray.map((tech, index) => (
                    <Badge pill key={index} bg={techColors[index % techColors.length]}>
                        {tech}
                    </Badge>
                ))}
            </Stack>
            <Button variant="primary">{demo}</Button>
            <Button variant="primary">{github}</Button>
        </Card.Body>
    </Card>
);

ProjectCard.propTypes = {
    applogo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    techarray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;