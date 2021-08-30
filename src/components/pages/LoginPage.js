import { useDispatch } from "react-redux";

import "../../styles/LoginPage.scss";

import Card from "../UI/Card";

import { authActions } from "../../store/auth-slice";
import { useEffect } from "react";

const LoginPage = () => {
  const dispatch = useDispatch();

  const staffLoginHandler = () => {
    dispatch(authActions.login());
  };

  const adminLoginHandler = () => {
    dispatch(authActions.adminLogin());
  };

  useEffect(() => {
    dispatch(authActions.setLocalStorage());
  }, [dispatch]);

  return (
    <Card className="login__control">
      <span className="login__text">LOGIN AS:</span>
      <button className="button" onClick={staffLoginHandler}>
        Airport Check-in Staff
      </button>
      <button className="button" onClick={adminLoginHandler}>
        Admin
      </button>
    </Card>
  );
};

export default LoginPage;
