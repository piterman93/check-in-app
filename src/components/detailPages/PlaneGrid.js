import "../../styles/PlaneGrid.scss";

import PlaneSeat from "./PlaneSeat";

const PlaneGrid = ({ flightDetails }) => {
  const row1 = flightDetails[0].seatsRow1;
  const row2 = flightDetails[0].seatsRow2;

  const seatColorAvailabe = flightDetails[0].passengers.seat;
  const seatColorInfand = flightDetails[0].passengers.seat;
  const seatColorWheelChair = flightDetails[0].passengers.seat;

  const seatsRow1 = row1.map((row, i) => {
    let className;
    let number = i + 1;
    return <PlaneSeat key={i}>{number}</PlaneSeat>;
  });
  const seatsRow2 = row2.map((row, i) => {
    let number = row2[0];
    let number1 = number + i;
    return <PlaneSeat key={i}>{number1}</PlaneSeat>;
  });

  return (
    <div className="grid__container">
      <p>Plane Front</p>
      <div className="grid__seats">
        <div className="grid__seats_row">{seatsRow1}</div>
        <p>Walking Path</p>
        <div className="grid__seats_row">{seatsRow2}</div>
      </div>
    </div>
  );
};

export default PlaneGrid;
