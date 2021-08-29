import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormData } from "../../formData";

import PageForm from "../styled-components/PageForm";

import { showNavTableActions } from "../../store/showNavTable-slice";

import Card from "../UI/Card";
import AddPassengerServiceForm from "../styled-components/AddPassengerServiceForm";

const id = 4;

const AddPassengerServicePage = (props) => {
  const [flightOption, setFlightOption] = useState("");
  const [passengerName, setPassengerName] = useState("");

  const showTable = useSelector((state) => state.showNavTable.showTable);
  const dispatch = useDispatch();

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
        <AddPassengerServiceForm
          option={flightOption}
          passengerName={passengerName}
        />
      )}
    </React.Fragment>
  );
};

export default AddPassengerServicePage;
