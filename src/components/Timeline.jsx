import CodersrankTimeline from '@codersrank/timeline';

// register web component as <codersrank-timeline> element
window.customElements.define('codersrank-timeline', CodersrankTimeline);

const Timeline = () => {
  return (
    <div className="timeline-container">
      <codersrank-timeline
        username="rileymanda"
        type="technologies"
        branding="false"
      ></codersrank-timeline>  
    </div>
  );
};
export default Timeline;
