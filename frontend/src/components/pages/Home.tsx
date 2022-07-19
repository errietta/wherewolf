
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

import { Link, useNavigate } from 'react-router-dom';
import { GameSelection } from "./GameSelection";

function Home() {
  const [game, setGame] = useState<string>();
  const [moderationMode, setModerationMode] = useState<boolean>(false);
  const navigate = useNavigate();

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
    return <>{navigate("/game/moderate")}</>
  } else {
    return <>{navigate(`/game/${game}`)}</>
  }
}

export default Home;
