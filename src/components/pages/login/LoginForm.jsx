import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/order/" + userName);
  };
  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <div>
      <h1>Bienvenue chez nous!</h1>
      <br />

      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
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

//*******OPTION 2 */
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function LoginForm({ userName, setUserName }) {
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate("/order/" + userName);
//   };
//   const handleChange = (e) => {
//     setUserName(e.target.value);
//   };
//   return (
//     <div>
//       <h1>Bienvenue chez nous!</h1>
//       <br />

//       <h2>Connectez-vous</h2>
//       <form action="submit" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={userName}
//           onChange={(e) => handleChange(e)}
//           placeholder="Entrez votre prenom"
//           required
//         />
//         <button type="submit">Acceder a votre espace</button>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;
