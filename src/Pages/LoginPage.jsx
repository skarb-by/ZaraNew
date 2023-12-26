import Login from "components/Login";
import React, { useEffect } from "react";
const LoginPage = (props) => {
  useEffect(() => {
    document.title = `${props.title}`;
  }, [props.title]);
  return (
    <div>
      <Login />
    </div>
  );
};
export default LoginPage;
