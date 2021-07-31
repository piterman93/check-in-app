import "../../styles/LoginPage.scss";

import Card from "../UI/Card";

const LoginPage = (props) => {
  return (
    <Card className="login__control">
      <span className="login__text">LOGIN AS:</span>
      <button className="button">Airport Check-in Staff</button>
      <button className="button">Admin</button>
    </Card>
  );
};

export default LoginPage;
