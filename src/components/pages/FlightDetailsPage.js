import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormData } from "../../formData";

import PageForm from "../styled-components/PageForm";

import { showNavTableActions } from "../../store/showNavTable-slice";

import Card from "../UI/Card";

import FlightDetails from "../detailPages/FlightDetails";

const id = 2;

const FlightDetailsPage = () => {
  const [flightOption, setFlightOption] = useState("");
  const [checkInNeeded, setCheckInNeeded] = useState(true);

  const showTable = useSelector((state) => state.showNavTable.showTable);
  const dispatch = useDispatch();

  const formInfo = FormData.find((data) => data.id === id);
  const data = formInfo;

  const showTableHandler = (data) => {
    dispatch(showNavTableActions.hideTable());
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
