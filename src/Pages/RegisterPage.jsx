import SingUp from "components/SingUp";
import React, { useEffect } from "react";

const RegisterPage = (props) => {
  useEffect(() => {
    document.title = `${props.title}`;
  }, [props.title]);
  return (
    <div>
      <SingUp />
    </div>
  );
};
export default RegisterPage;
