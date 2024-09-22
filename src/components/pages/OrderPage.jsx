import React from "react";
import { Link, useParams } from "react-router-dom";

function OrderPage() {
  const { name } = useParams();
  return (
    <div>
      <h1>{`Bonjour ${name}`}</h1>
      <br />
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}

export default OrderPage;

//*******OPTION 2 */
// import React from "react";
// import { useNavigate } from "react-router-dom";

// function OrderPage({ name, setName }) {
//   const navigate = useNavigate();
//   const handleClick = () => {
//     setName("");
//     navigate("/");
//   };

//   return (
//     <div>
//       <h1>{`Bonjour ${name}`}</h1>
//       <br />
//       <button onClick={handleClick}>Déconnexion</button>
//     </div>
//   );
// }

// export default OrderPage;
