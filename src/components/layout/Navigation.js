import { NavLink } from "react-router-dom";

import "../../styles/Navigation.scss";

const Navigation = (props) => {
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
          <li>
            <NavLink to="/change....">Change.... as Admin</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
