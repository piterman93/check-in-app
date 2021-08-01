import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

import "../../styles/Navigation.scss";

const Navigation = (props) => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  return (
    <div className="aside__nav">
      <nav>
        <ul>
          <li>
            <NavLink to="/check-in">Passenger Check-in</NavLink>
          </li>
          <li>
            <NavLink to="/flight-details">Flight details</NavLink>
          </li>
          <li>
            <NavLink to="/passengers-list">Passengers List</NavLink>
          </li>
          <li>
            <NavLink to="/add-passenger-service">Add Passenger Service</NavLink>
          </li>
          {isAdmin && (
            <li>
              <NavLink to="/admin-changes">Change.... as Admin</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
