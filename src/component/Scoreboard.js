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

import { useState } from "react";
import AddPlayerForm from "./AddPlayerForm";
import Player from "./Players";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);
  const players_sorted = [
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ].sort(compare_score);

  return (
    <div className="Scoreboard">
      <p>Player's scores:</p>
      <ul>
        {players_sorted.map((player) => (
          <Player key={player.id} name={player.name} score={player.score} />
        ))}
      </ul>
      <AddPlayerForm />
    </div>
  );
}
