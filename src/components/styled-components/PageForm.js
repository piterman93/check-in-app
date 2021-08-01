import { FlightData } from "../../flightData";

import "../../styles/PageForm.scss";

const PageForm = ({ id, name, title }) => {
  const submitHandler = (e) => {
    e.preventDefault();
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
          <select id="flight">
            <option>{FlightData[0].number}</option>
            <option>{FlightData[1].number}</option>
          </select>
          <button className="button">Search</button>
        </div>
      </div>
    </form>
  );
};

export default PageForm;
