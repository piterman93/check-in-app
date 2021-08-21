import "../../styles/PlaneSeat.scss";

const PlaneSeat = ({ className, children, onCheckIn, id }) => {
  const classes = `grid__seat ${className}`;

  const checkInHandler = () => {
    onCheckIn(id);
  };

  return (
    <div className={classes} onClick={checkInHandler}>
      {children}
    </div>
  );
};

export default PlaneSeat;
