import React, { useState } from "react";
import { FormData } from "../../formData";

import PageForm from "../styled-components/PageForm";

import Card from "../UI/Card";

import FlightDetails from "../detailPages/FlightDetails";

const id = 2;

const FlightDetailsPage = (props) => {
  const [showTable, setShowTable] = useState(true);
  const [flightOption, setFlightOption] = useState("");
  const [checkInNeeded, setCheckInNeeded] = useState(true);

  const formInfo = FormData.find((data) => data.id === id);
  const data = formInfo;

  const showTableHandler = (data) => {
    setShowTable(false);
    setFlightOption(data);
    setCheckInNeeded(false);
  };

  return (
    <React.Fragment>
      {showTable && (
        <Card className="form">
          <PageForm
            id={data.id}
            title={data.title}
            onClick={showTableHandler}
          />
        </Card>
      )}
      {!showTable && (
        <FlightDetails option={flightOption} checkInNeeded={checkInNeeded} />
      )}
    </React.Fragment>
  );
};

export default FlightDetailsPage;
