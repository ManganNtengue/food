import React from "react";
import LoginForm from "./LoginForm";

function LoginPage({ name, setName }) {
  return (
    <div>
      <LoginForm name={name} setName={setName} />
    </div>
  );
}

export default LoginPage;
