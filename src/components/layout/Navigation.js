import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { showNavTableActions } from "../../store/showNavTable-slice";

import "../../styles/Navigation.scss";

const Navigation = (props) => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  const dispatch = useDispatch();

  const showTableHandler = () => {
    dispatch(showNavTableActions.showTable());
  };

  return (
    <div className="aside__nav">
      <nav>
        <ul>
          <li onClick={showTableHandler}>
            <NavLink to="/check-in">Passenger Check-in</NavLink>
          </li>
          <li onClick={showTableHandler}>
            <NavLink to="/flight-details">Flight details</NavLink>
          </li>
          <li onClick={showTableHandler}>
            <NavLink to="/passengers-list">Passengers List</NavLink>
          </li>
          <li onClick={showTableHandler}>
            <NavLink to="/add-passenger-service">Add Passenger Service</NavLink>
          </li>
          {isAdmin && (
            <li onClick={showTableHandler}>
              <NavLink to="/admin-changes">Admin Panel for Changes</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
