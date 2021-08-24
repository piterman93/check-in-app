import "../../styles/PlaneSeat.scss";

const PlaneSeat = ({
  className,
  children,
  onCheckIn,
  id,
  checkInNeeded,
  passCheckIn,
}) => {
  const classes = `grid__seat ${className}`;

  const checkInHandler = () => {
    const undo = id.toString() === passCheckIn.toString() && true;

    if (checkInNeeded) {
      if (
        (className === "available" && !passCheckIn) ||
        (className === "notAvailable" && passCheckIn && undo) ||
        (className === "infant" && passCheckIn && undo) ||
        (className === "wheelchair" && passCheckIn && undo)
      )
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
