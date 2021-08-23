import "../../styles/PlaneSeat.scss";

const PlaneSeat = ({ className, children, onCheckIn, id, checkInNeeded }) => {
  const classes = `grid__seat ${className}`;

  const checkInHandler = () => {
    if (checkInNeeded) {
      onCheckIn(id);
    } else return;
  };

  return (
    <div className={classes} onClick={checkInHandler}>
      {children}
    </div>
  );
};

export default PlaneSeat;
