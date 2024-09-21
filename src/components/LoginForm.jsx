import React, { useState } from "react";

function LoginForm() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${name}`);
    setName("");
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h1>Bienvenue chez nous!</h1>

      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e)}
          placeholder="Entrez votre prenom"
          required
        />
        <button type="submit">Acceder a votre espace</button>
      </form>
    </div>
  );
}

export default LoginForm;
