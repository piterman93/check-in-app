import { useState } from "react";

import { FlightData } from "../../flightData";

import "../../styles/PageForm.scss";

const PageForm = ({ name, title, onClick }) => {
  const [selectValue, setSelectValue] = useState(FlightData[0].number);

  const submitHandler = (e) => {
    e.preventDefault();
    onClick(selectValue);
  };

  const selectChangeHandler = (e) => {
    const selectedOption = e.target.value;
    setSelectValue(selectedOption);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="section__form">
        <div className="section__form__title">{title}</div>
        {name && (
          <div className="section__form__name">
            <label id="name">{name}</label>
            <input type="text" id="name" />
          </div>
        )}
        <div className="section__form__flight">
          <label id="flight">Flight Number</label>
          <select
            id="flight"
            onChange={selectChangeHandler}
            value={selectValue}
          >
            <option value={FlightData[0].number}>{FlightData[0].number}</option>
            <option value={FlightData[1].number}>{FlightData[1].number}</option>
          </select>
          <button className="button">Search</button>
        </div>
      </div>
    </form>
  );
};

export default PageForm;
