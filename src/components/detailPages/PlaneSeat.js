import "../../styles/PlaneSeat.scss";

const PlaneSeat = (props) => {
  const classes = `grid__seat ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default PlaneSeat;
