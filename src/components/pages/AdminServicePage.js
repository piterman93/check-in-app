import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import AdminPanel from "../styled-components/AdminPanel";
import PageForm from "../styled-components/PageForm";
import Card from "../UI/Card";

import { showNavTableActions } from "../../store/showNavTable-slice";
import { FormData } from "../../formData";

const id = 5;

const AdminServicePage = () => {
  const [flightOption, setFlightOption] = useState("");
  const [passengerName, setPassengerName] = useState("");

  const formInfo = FormData.find((data) => data.id === id);
  const data = formInfo;

  const showTable = useSelector((state) => state.showNavTable.showTable);
  const dispatch = useDispatch();

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
        <AdminPanel option={flightOption} passengerName={passengerName} />
      )}
    </React.Fragment>
  );
};

export default AdminServicePage;
