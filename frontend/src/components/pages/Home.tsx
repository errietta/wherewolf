
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Player, Voting } from "./Voting";
import { useState } from "react";

import { Link } from 'react-router-dom';
import { GameSelection } from "./GameSelection";

function Home() {
  const [game, setGame] = useState<string>();
  const [moderationMode, setModerationMode] = useState<boolean>(false);

  if (!game) {
    return (
      <div className="App">
        <GameSelection
          onJoinGame={(gameId) => setGame(gameId)}
          onCreateGame={() => {
            console.log("???");
            setModerationMode(true);
          }}
        ></GameSelection>
      </div>
    );
  }

  if (moderationMode) {
    return <Link to="/game/moderate">Mod game</Link>
  } else {
    return <Link to={`/game/${game}`}>Join game</Link>
  }
}

export default Home;
