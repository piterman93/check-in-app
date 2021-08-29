import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormData } from "../../formData";

import PassengerList from "../detailPages/PassengerList";

import { showNavTableActions } from "../../store/showNavTable-slice";

import PageForm from "../styled-components/PageForm";

import Card from "../UI/Card";

const id = 3;

const PassengersListPage = (props) => {
  const [option, setOption] = useState("");

  const showTable = useSelector((state) => state.showNavTable.showTable);
  const dispatch = useDispatch();

  const formInfo = FormData.find((data) => data.id === id);
  const data = formInfo;

  const showListHandler = (data) => {
    dispatch(showNavTableActions.hideTable());
    setOption(data);
  };

  return (
    <React.Fragment>
      {showTable && (
        <Card className="form">
          <PageForm id={data.id} title={data.title} onClick={showListHandler} />
        </Card>
      )}
      {!showTable && <PassengerList option={option} />}
    </React.Fragment>
  );
};

export default PassengersListPage;
