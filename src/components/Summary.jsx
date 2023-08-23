import CodersrankSummary from '@codersrank/summary';

// register web component as <codersrank-summary> element
window.customElements.define('codersrank-summary', CodersrankSummary);


const Summary = () => {
  return (
    <div className="summary-container">Summary
          <codersrank-summary branding="false" username="rileymanda"></codersrank-summary>
    </div>
  );
};
export default Summary;
