import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import PageForm from "../styled-components/PageForm";
import FlightDetails from "../detailPages/FlightDetails";
import Card from "../UI/Card";

import { showNavTableActions } from "../../store/showNavTable-slice";
import { FormData } from "../../formData";

const id = 1;

const CheckInPage = () => {
  const [flightOption, setFlightOption] = useState("");
  const [passengerName, setPassengerName] = useState("");

  const showTable = useSelector((state) => state.showNavTable.showTable);

  const dispatch = useDispatch();

  const checkInNeeded = true;

  const formInfo = FormData.find((data) => data.id === id);
  const data = formInfo;

  const showTableHandler = (flight, pass) => {
    dispatch(showNavTableActions.hideTable());
    setFlightOption(flight);
    setPassengerName(pass);
  };

  return (
    <React.Fragment>
      {showTable && (
        <Card className="form">
          <PageForm
            id={data.id}
            title={data.title}
            name={data.name}
            onClick={showTableHandler}
          />
        </Card>
      )}
      {!showTable && (
        <FlightDetails
          option={flightOption}
          passengerName={passengerName}
          checkInNeeded={checkInNeeded}
        />
      )}
    </React.Fragment>
  );
};

export default CheckInPage;
