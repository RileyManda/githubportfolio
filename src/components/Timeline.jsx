import CodersrankTimeline from '@codersrank/timeline';
import Container from 'react-bootstrap/Container';

window.customElements.define('codersrank-timeline', CodersrankTimeline);

const Timeline = () => {
  return (
    <div className="timeline-container" id="experience">
      <div className="section-title">
        <h2>Experience</h2></div>
      <Container fluid>

        <codersrank-timeline
          username="rileymanda"
          type="technologies"
          branding="false"
        ></codersrank-timeline>
      </Container>
    </div>
  );
};
export default Timeline;