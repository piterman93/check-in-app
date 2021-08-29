import { useSelector } from "react-redux";

import LoadingSpinner from "../styled-components/LoadingSpinner";

import "../../styles/StartPage.scss";

const StartPage = () => {
  const isLoading = useSelector((state) => state.flight.isLoading);

  let content;

  if (isLoading) {
    content = (
      <div className="section__loading">
        <LoadingSpinner />
        <h3>Loading flight data...</h3>
      </div>
    );
  }

  if (!isLoading) {
    content = (
      <div className="section__start">
        <h1>Welcome to a Check-in application!</h1>
        <h3>Please select an action from the aside Panel.</h3>
      </div>
    );
  }

  return content;
};

export default StartPage;
