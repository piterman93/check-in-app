import "../../styles/PlaneGrid.scss";

import PlaneSeat from "./PlaneSeat";
import PlaneGridLegend from "./PlaneGridLegend";
import React from "react";

const PlaneGrid = ({ flightDetails }) => {
  const row1 = flightDetails[0].seatsRow1;
  const row2 = flightDetails[0].seatsRow2;
  const passengers = flightDetails[0].passengers;

  //to fix
  const assignClass = (data) => {
    let className;
    passengers.forEach((passenger) => {
      if (passenger.seat === data.toString()) {
        className = "notAvailable";
        return;
      } else if (passenger.specServ.INF) {
        className = "infant";
        return;
      } else if (passenger.specServ.WCH) {
        className = "wheelchair";
        return;
      } else {
        className = "available";
      }
    });
    return className;
  };

  const seatsRow1 = row1.map((row, i) => {
    let number = i + 1;
    const className = assignClass(number);
    return (
      <PlaneSeat key={number} className={className}>
        {number}
      </PlaneSeat>
    );
  });

  const seatsRow2 = row2.map((row, i) => {
    let number = row2[0];
    let number1 = number + i;
    const className = assignClass(number1);
    return (
      <PlaneSeat key={number1} className={className}>
        {number1}
      </PlaneSeat>
    );
  });

  return (
    <div className="grid__control">
      <div className="grid__container">
        <p>Plane Front</p>
        <div className="grid__seats">
          <div className="grid__seats_row">{seatsRow1}</div>
          <p>Walking Path</p>
          <div className="grid__seats_row">{seatsRow2}</div>
        </div>
      </div>
      <PlaneGridLegend />
    </div>
  );
};

export default PlaneGrid;
