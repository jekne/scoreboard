// src/components/Scoreboard.js

// import AddPlayerForm from "./AddPlayerForm";
// import Player from "./Players"

// export default function Scoreboard() {
//   return (
//     <div className="Scoreboard">
//       <p>Player's scores:</p>
//       <ul>
//         <Player name="Violeta" />
//         <Player name="Eszter" />
//         <Player name="Jeroen v2" />
//         <Player name="Lisa" />
//       </ul>
//       <AddPlayerForm />
//     </div>
//   );
// }

// now we start to use the {useState} in the bellow

// src/components/Scoreboard.js
// import { useState } from "react";
// import AddPlayerForm from "./AddPlayerForm";
// import Player from "./Players";

// export default function Scoreboard() {
//   const [players, set_players] = useState([
//     { id: 1, name: "Violeta", score: 11 },
//     { id: 2, name: "Eszter", score: 14 },
//     { id: 3, name: "Jeroen v2", score: 4 },
//     { id: 4, name: "Lisa", score: 42 },
//   ]);

//   return (
//     <div className="Scoreboard">
//       <p>Player's scores:</p>
//       <ul>
//         {players.map((player) => (
//           <Player key={player.id} name={player.name} score={player.score} />
//         ))}
//       </ul>
//       <AddPlayerForm />
//     </div>
//   );
// }

//we are add sortin to scoreboar, adding sorting logic and called the score at the screen

// import { useState } from "react";
// import AddPlayerForm from "./AddPlayerForm";
// import Player from "./Players";

// function compare_score(player_a, player_b) {
//   return player_b.score - player_a.score;
// }

// export default function Scoreboard() {
//   const [players, set_players] = useState([
//     { id: 1, name: "Violeta", score: 11 },
//     { id: 2, name: "Eszter", score: 14 },
//     { id: 3, name: "Jeroen v2", score: 4 },
//     { id: 4, name: "Lisa", score: 42 },
//   ]);
//   const players_sorted = [
//     { id: 1, name: "Violeta", score: 11 },
//     { id: 2, name: "Eszter", score: 14 },
//     { id: 3, name: "Jeroen v2", score: 4 },
//     { id: 4, name: "Lisa", score: 42 },
//   ].sort(compare_score);

//   return (
//     <div className="Scoreboard">
//       <p>Player's scores:</p>
//       <ul>
//         {players_sorted.map((player) => (
//           <Player key={player.id} name={player.name} score={player.score} />
//         ))}
//       </ul>
//       <AddPlayerForm />
//     </div>
//   );
// }

// in this part we are gonna sort by the name (remeber i remove the player by score, in the next exercise i am gonna ned both)

// import { useState } from "react";
// import AddPlayerForm from "./AddPlayerForm";
// import Player from "./Players";

// function compare_Name(player_a, player_b) {
//   return player_a.name.localeCompare(player_b.name);
// }

// export default function Scoreboard() {
//   const [players, set_players] = useState([
//     { id: 1, name: "Violeta", score: 11 },
//     { id: 2, name: "Eszter", score: 14 },
//     { id: 3, name: "Jeroen v2", score: 4 },
//     { id: 4, name: "Lisa", score: 42 },
//   ]);
//   const players_sorted = [...players].sort(compare_Name);

//   return (
//     <div className="Scoreboard">
//       <p>Player's scores:</p>
//       <ul>
//         {players_sorted.map((player) => (
//           <Player key={player.id} name={player.name} score={player.score} />
//         ))}
//       </ul>
//       <AddPlayerForm />
//     </div>
//   );
// }

// the exercise bellow add a new state variable to the Scoreboard
// src/components/Scoreboard.js
import { useState } from "react";
import AddPlayerForm from "./AddPlayerForm";
import Player from "./Players";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}
function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}
export default function Scoreboard() {
  const [sort_by, set_sort_by] = useState("score"); // either "score" or "name"

  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);
  const players_sorted = [...players].sort(
    sort_by === "name" ? compare_name : compare_score
  );
  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  // Defining the callback function:
  const incrementScore = (player_id) => {
    console.log("Increment player, ", player_id);
    // something smart here
  };

  return (
    <div className="Scoreboard">
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <p>Player's scores:</p>
      <ul>
        {players_sorted.map((player) => (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            incrementScore={incrementScore}
          />
        ))}
      </ul>
      <AddPlayerForm
        addPlayer={(name) => {
          console.log("Let's add a new player with the name:", name);
        }}
      />
    </div>
  );
}
