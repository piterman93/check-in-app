import React, { useState } from "react";
import { FormData } from "../../formData";

import PageForm from "../styled-components/PageForm";
import FlightDetails from "../detailPages/FlightDetails";

import Card from "../UI/Card";

const id = 1;

const CheckInPage = (props) => {
  const [showTable, setShowTable] = useState(true);
  const [flightOption, setFlightOption] = useState("");
  const [passengerName, setPassengerName] = useState("");

  const checkInNeeded = true;

  const formInfo = FormData.find((data) => data.id === id);
  const data = formInfo;

  const showTableHandler = (flight, pass) => {
    setShowTable(false);
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
