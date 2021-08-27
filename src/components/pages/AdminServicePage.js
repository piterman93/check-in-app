import React, { useState } from "react";
import { FormData } from "../../formData";

import AdminPanel from "../styled-components/AdminPanel";
import PageForm from "../styled-components/PageForm";

import Card from "../UI/Card";

const id = 5;

const AdminServicePage = (props) => {
  const [showTable, setShowTable] = useState(true);
  const [flightOption, setFlightOption] = useState("");
  const [passengerName, setPassengerName] = useState("");

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
        <AdminPanel option={flightOption} passengerName={passengerName} />
      )}
    </React.Fragment>
  );
};

export default AdminServicePage;
