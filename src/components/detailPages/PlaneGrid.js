import { useEffect, useState, Fragment } from "react";
import { useDispatch } from "react-redux";

import "../../styles/PlaneGrid.scss";

import PlaneSeat from "./PlaneSeat";
import PlaneGridLegend from "./PlaneGridLegend";
import Modal from "../UI/Modal";

import { flightActions } from "../../store/flight-slice";

const PlaneGrid = ({
  flightDetails,
  passengerName,
  selectedPassengerData,
  checkInNeeded,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [checkInID, setCheckInID] = useState("");
  const [passCheckedIn, setPassCheckedIn] = useState("");

  useEffect(() => {
    if (checkInNeeded) {
      if (selectedPassengerData.seat)
        setPassCheckedIn(selectedPassengerData.seat);
    }
  }, [selectedPassengerData, checkInNeeded]);

  const dispatch = useDispatch();

  const showCheckInModalHandler = (id) => {
    setCheckInID(id);
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const confirmCheckInChangePlaceHandler = () => {
    dispatch(
      flightActions.passengerCheckIn({
        checkInID,
        passengerName,
        flightDetails,
      })
    );
    setShowModal(false);
    setPassCheckedIn(checkInID);
  };

  const confirmUndoCheckInHandler = () => {
    dispatch(
      flightActions.undoCheckIn({
        passengerName,
        flightDetails,
      })
    );
    setShowModal(false);
    setPassCheckedIn("");
  };

  const assignClass = (data) => {
    let newPassengerNotAvailable;
    let newPassengerInfant;
    let newPassengerWheelchair;
    let newPassengerSpecialMeal;

    const notAvailable = passengers.find(
      (passenger) =>
        passenger.seat === data.toString() &&
        !passenger.specServ.INF &&
        !passenger.specServ.WCH &&
        !passenger.specMeal.SPEC
    );
    if (notAvailable) {
      newPassengerNotAvailable = {
        ...notAvailable,
        className: "notAvailable",
      };
      return newPassengerNotAvailable.className;
    }
    const infant = passengers.find(
      (passenger) =>
        passenger.seat === data.toString() && passenger.specServ.INF
    );
    if (infant) {
      newPassengerInfant = { ...infant, className: "infant" };
      return newPassengerInfant.className;
    }
    const wheelchair = passengers.find(
      (passenger) =>
        passenger.seat === data.toString() && passenger.specServ.WCH
    );
    if (wheelchair) {
      newPassengerWheelchair = { ...wheelchair, className: "wheelchair" };
      return newPassengerWheelchair.className;
    }
    const specialMeal = passengers.find(
      (passenger) =>
        passenger.seat === data.toString() && passenger.specMeal.SPEC
    );
    if (specialMeal) {
      newPassengerSpecialMeal = { ...specialMeal, className: "specialMeal" };
      return newPassengerSpecialMeal.className;
    }
    if ((!notAvailable, !infant, !wheelchair, !specialMeal)) return "available";
  };

  const row1 = flightDetails[0].seatsRow1;
  const row2 = flightDetails[0].seatsRow2;
  const passengers = flightDetails[0].passengers;

  const seatsRow1 = row1.map((row, i) => {
    let number = i + 1;
    const className = assignClass(number);
    return (
      <PlaneSeat
        key={number}
        id={number}
        className={className}
        onCheckIn={showCheckInModalHandler}
        checkInNeeded={checkInNeeded}
        passCheckIn={passCheckedIn}
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
        id={number1}
        className={className}
        onCheckIn={showCheckInModalHandler}
        checkInNeeded={checkInNeeded}
        passCheckIn={passCheckedIn}
      >
        {number1}
      </PlaneSeat>
    );
  });

  const content = (
    <Fragment>
      {showModal && (
        <Modal
          passengerName={passengerName}
          checkInID={checkInID}
          onClose={closeModalHandler}
          onConfirmCheckIn={confirmCheckInChangePlaceHandler}
          onUndoCheckIn={confirmUndoCheckInHandler}
          passCheckedIn={passCheckedIn}
        />
      )}
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
    </Fragment>
  );

  return content;
};

export default PlaneGrid;
