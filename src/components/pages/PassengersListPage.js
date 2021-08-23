import React, { useState } from "react";
import { FormData } from "../../formData";
import { FlightData } from "../../flightData";

import PassengerList from "../detailPages/PassengerList";

import PageForm from "../styled-components/PageForm";

import Card from "../UI/Card";

const id = 3;

const PassengersListPage = (props) => {
  const [showList, setShowList] = useState(false);
  const [option, setOption] = useState("");

  const formInfo = FormData.filter((data) => data.id === id);
  const data = formInfo[0];

  const showListHandler = (data) => {
    setShowList((state) => !state);
    setOption(data);
  };

  return (
    <React.Fragment>
      {!showList && (
        <Card className="form">
          <PageForm id={data.id} title={data.title} onClick={showListHandler} />
        </Card>
      )}
      {showList && <PassengerList option={option} />}
    </React.Fragment>
  );
};

export default PassengersListPage;
