import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ProjectCard = ({applogo,title,description,demo,github}) => (

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={applogo} />
          <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                    {description}
              </Card.Text>
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
}
export default ProjectCard;
