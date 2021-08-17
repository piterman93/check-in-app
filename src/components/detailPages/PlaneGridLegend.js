import "../../styles/PlaneGridLegend.scss";

const PlaneGridLegend = (props) => {
  return (
    <div className="grid__legend_container">
      <div className="grid__legend_item">
        <div></div>
        <span> - seat available</span>
      </div>
      <div className="grid__legend_item">
        <div></div>
        <span> - seat not available</span>
      </div>
      <div className="grid__legend_item">
        <div></div>
        <span> - seat for a passenger with infant</span>
      </div>
      <div className="grid__legend_item">
        <div></div>
        <span> - seat for a passenger with wheelchair</span>
      </div>
    </div>
  );
};

export default PlaneGridLegend;
