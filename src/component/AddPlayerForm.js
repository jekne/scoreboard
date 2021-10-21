// src/components/AddPlayerForm.js

// export default function AddPlayerForm() {
//   return (
//     <div className="AddPlayerForm">[TODO: the form to add a new player] </div>
//   );
// }

// the part above was the begining just with new player
// src/components/AddPlayerForm.js
// now the bellow part has the new  with more structure and the field of the blank

import { useState } from "react";

// src/components/AddPlayerForm.js
export default function AddPlayerForm(props) {
  const [name, set_name] = useState("");
  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            set_name(event.target.value);
          }}
        />{" "}
        <button
          onClick={() => {
            props.addPlayer(name);
          }}
        >
          Add
        </button>
      </p>
    </div>
  );
}
