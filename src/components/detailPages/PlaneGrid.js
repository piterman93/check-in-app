import { useState } from "react";
import { useDispatch } from "react-redux";

import PlaneSeat from "./PlaneSeat";
import PlaneGridLegend from "./PlaneGridLegend";

import Modal from "../UI/Modal";

import "../../styles/PlaneGrid.scss";

import { flightActions } from "../../store/flight-slice";

const PlaneGrid = ({ flightDetails, passenger }) => {
  const [showModal, setShowModal] = useState(false);
  const [checkInID, setCheckInID] = useState("");

  const row1 = flightDetails[0].seatsRow1;
  const row2 = flightDetails[0].seatsRow2;
  const passengers = flightDetails[0].passengers;

  const dispatch = useDispatch();

  const showModalHandler = (id) => {
    setCheckInID(id);
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const confirmCheckInHandler = () => {
    dispatch(flightActions.passengerCheckIn({ checkInID, passenger }));
  };

  //to fix
  const assignClass = (data) => {
    let className;
    passengers.forEach((passenger) => {
      if (passenger.seat === data.toString()) {
        className = "notAvailable";
      } else if (passenger.specServ.INF) {
        className = "infant";
      } else if (passenger.specServ.WCH) {
        className = "wheelchair";
      } else {
        className = "available";
      }
      return className;
    });
    return className;
  };

  const seatsRow1 = row1.map((row, i) => {
    let number = i + 1;
    const className = assignClass(number);
    return (
      <PlaneSeat
        key={number}
        id={number}
        className={className}
        onCheckIn={showModalHandler}
      >
        {number}
      </PlaneSeat>
    );
  });

  const seatsRow2 = row2.map((row, i) => {
    let number = row2[0];
    let number1 = number + i;
    const className = assignClass(number1);
    return (
      <PlaneSeat
        key={number1}
        id={number}
        className={className}
        onCheckIn={showModalHandler}
      >
        {number1}
      </PlaneSeat>
    );
  });

  let content;

  if (showModal) {
    content = (
      <Modal
        passenger={passenger}
        checkInID={checkInID}
        onClose={closeModalHandler}
        onConfirm={confirmCheckInHandler}
      />
    );
  }

  if (!showModal) {
    content = (
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
  }

  return content;
};

export default PlaneGrid;
