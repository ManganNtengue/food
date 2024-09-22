import React from "react";
import { useNavigate } from "react-router-dom";

function OrderPage({ name, setName }) {
  const navigate = useNavigate();
  const handleClick = () => {
    setName("");
    navigate("/");
  };

  return (
    <div>
      <h1>{`Bonjour ${name}`}</h1>
      <br />
      <button onClick={handleClick}>Déconnexion</button>
    </div>
  );
}

export default OrderPage;
