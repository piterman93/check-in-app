import { useState } from "react";
import "../../styles/PassengerFilterForm.scss";

import Card from "../UI/Card";

const PassengerFilterForm = ({ onFilter, onClear }) => {
  const [checkedIn, setCheckedIn] = useState(false);
  const [missPassport, setMissPassport] = useState(false);
  const [missDOB, setMissDOB] = useState(false);
  const [infants, setInfants] = useState(false);
  const [wheelchair, setWheelchair] = useState(false);
  const [specialMeal, setSpecialMeal] = useState(false);

  const filterHandler = () => {
    onFilter({
      checkedIn,
      missPassport,
      missDOB,
      infants,
      wheelchair,
      specialMeal,
    });
  };

  const clearFilterHandler = () => {
    onClear();
    setCheckedIn(false);
    setMissPassport(false);
    setMissDOB(false);
    setInfants(false);
    setWheelchair(false);
    setSpecialMeal(false);
  };

  const btnDisabled =
    !checkedIn &&
    !missPassport &&
    !missDOB &&
    !infants &&
    !wheelchair &&
    !specialMeal;

  return (
    <Card>
      <div className="filter__container">
        <h3>Filter passengers:</h3>
        <div className="filter__option">
          <input
            type="checkbox"
            id="checkedIn"
            checked={checkedIn}
            onChange={(e) => setCheckedIn(e.target.checked)}
          ></input>
          <label htmlFor="checkedIn">Checked in</label>
        </div>
        <div className="filter__option">
          <input
            type="checkbox"
            id="passport"
            checked={missPassport}
            onChange={(e) => setMissPassport(e.target.checked)}
          ></input>
          <label htmlFor="passport">Missing passport</label>
        </div>
        <div className="filter__option">
          <input
            type="checkbox"
            id="birthday"
            checked={missDOB}
            onChange={(e) => setMissDOB(e.target.checked)}
          ></input>
          <label htmlFor="birthday">Missing date of birth</label>
        </div>
        <div className="filter__option">
          <input
            type="checkbox"
            id="infants"
            checked={infants}
            onChange={(e) => setInfants(e.target.checked)}
          ></input>
          <label htmlFor="infants">Infants</label>
        </div>
        <div className="filter__option">
          <input
            type="checkbox"
            id="wheelchair"
            checked={wheelchair}
            onChange={(e) => setWheelchair(e.target.checked)}
          ></input>
          <label htmlFor="wheelchair">Wheelchair</label>
        </div>
        <div className="filter__option">
          <input
            type="checkbox"
            id="specMeals"
            checked={specialMeal}
            onChange={(e) => setSpecialMeal(e.target.checked)}
          ></input>
          <label htmlFor="specMeals">Special Meals</label>
        </div>
        <div className="filter__actions">
          <button
            className="submit"
            disabled={btnDisabled}
            onClick={filterHandler}
          >
            Filter
          </button>
          <button onClick={clearFilterHandler}>Clear filter</button>
        </div>
      </div>
    </Card>
  );
};

export default PassengerFilterForm;
