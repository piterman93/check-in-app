import { useState } from "react";

import { FlightData } from "../../flightData";

import "../../styles/PageForm.scss";

const PageForm = ({ name, title, onClick }) => {
  const [selectFlight, setSelectFlight] = useState(FlightData[0].number);
  const [selectPassenger, setSelectPassenger] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onClick(selectFlight, selectPassenger);
  };

  const selectChangeHandler = (e) => {
    const selectedFlight = e.target.value;
    setSelectFlight(selectedFlight);
  };

  const selectPassengerHandler = (e) => {
    const selectedPassenger = e.target.value;
    setSelectPassenger(selectedPassenger);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="section__form">
        <div className="section__form__title">{title}</div>
        {name && (
          <div className="section__form__name">
            <label id="name">{name}</label>
            <input
              type="text"
              id="name"
              onChange={selectPassengerHandler}
              value={selectPassenger}
            />
          </div>
        )}
        <div className="section__form__flight">
          <label id="flight">Flight Number</label>
          <select
            id="flight"
            onChange={selectChangeHandler}
            value={selectFlight}
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
