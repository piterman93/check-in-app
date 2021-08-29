import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { NavLink } from "react-router-dom";

import "../../styles/Header.scss";

import { authActions } from "../../store/auth-slice";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("logged");
    dispatch(authActions.logout());
    history.push("/");
  };

  return (
    <div className="header__control">
      <h1>
        <NavLink to="/home">Check in App</NavLink>
      </h1>
      <button className="btn__logout" onClick={logoutHandler}>
        Log out
      </button>
    </div>
  );
};

export default Header;
