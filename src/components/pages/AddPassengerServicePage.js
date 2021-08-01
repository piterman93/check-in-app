import React from "react";
import { FormData } from "../../formData";

import PageForm from "../styled-components/PageForm";

import Card from "../UI/Card";

const id = 4;

const AddPassengerServicePage = (props) => {
  const formInfo = FormData.filter((data) => data.id === id);
  const data = formInfo[0];

  return (
    <React.Fragment>
      <Card className="form">
        <PageForm id={data.id} title={data.title} name={data.name} />
      </Card>
    </React.Fragment>
  );
};

export default AddPassengerServicePage;
