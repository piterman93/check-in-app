import React from "react";
import { FormData } from "../../formData";

import PageForm from "../styled-components/PageForm";

import Card from "../UI/Card";

const id = 5;

const AdminServicePage = (props) => {
  const formInfo = FormData.find((data) => data.id === id);
  const data = formInfo;

  return (
    <React.Fragment>
      <Card className="form">
        <PageForm id={data.id} title={data.title} name={data.name} />
      </Card>
    </React.Fragment>
  );
};

export default AdminServicePage;
