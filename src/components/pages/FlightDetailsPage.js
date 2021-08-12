import React, { useState } from "react";
import { FormData } from "../../formData";

import PageForm from "../styled-components/PageForm";

import Card from "../UI/Card";

import FlightDetails from "../detailPages/FlightDetails";

const id = 2;

const FlightDetailsPage = (props) => {
  const [showTable, setShowTable] = useState(true);
  const [flightOption, setFlightOption] = useState("");

  const formInfo = FormData.filter((data) => data.id === id);
  const data = formInfo[0];

  const showTableHandler = (data) => {
    setShowTable(false);
    setFlightOption(data);
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
      {!showTable && <FlightDetails option={flightOption} />}
    </React.Fragment>
  );
};

export default FlightDetailsPage;
