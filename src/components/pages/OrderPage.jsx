import React from "react";

function OrderPage({ name }) {
  return (
    <div>
      <h1>{`Bonjour ${name}`}</h1>
      <br />
      <button>Déconnexion</button>
    </div>
  );
}

export default OrderPage;
