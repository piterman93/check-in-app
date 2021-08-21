import React, { useState } from "react";
import { FormData } from "../../formData";

import PageForm from "../styled-components/PageForm";
import FlightDetails from "../detailPages/FlightDetails";

import Card from "../UI/Card";

const id = 1;

const CheckInPage = (props) => {
  const [showTable, setShowTable] = useState(true);
  const [flightOption, setFlightOption] = useState("");
  const [passenger, setPassenger] = useState("");

  const formInfo = FormData.filter((data) => data.id === id);
  const data = formInfo[0];

  const showTableHandler = (flight, pass) => {
    setShowTable(false);
    setFlightOption(flight);
    setPassenger(pass);
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
        <FlightDetails option={flightOption} passenger={passenger} />
      )}
    </React.Fragment>
  );
};

export default CheckInPage;
