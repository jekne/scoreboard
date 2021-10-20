import "./App.css";
import "./component/Players";
import Player from "./component/Players";
import Scoreboard from "./component/Scoreboard";
import Title from "./component/Title";

function App() {
  return (
    <div className="App">
      <main>
        <Title />

        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
