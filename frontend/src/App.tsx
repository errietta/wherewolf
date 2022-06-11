import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Player, Voting } from "./components/pages/Voting";
import { useState } from "react";
import { GameSelection } from "./components/pages/GameSelection";

function splitPlayerList(playerText: string) {
  return playerText.split("\n").map((name) => ({ name: name.trim() }));
}

function App() {
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [textAreaValue, setTextAreaValue] = useState<string>();
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

  if (moderationMode && !playerList.length) {
    return (
      <div className="App">
        <textarea onChange={(e) => setTextAreaValue(e.target.value)} />
        <br />
        <button
          onClick={(e) =>
            textAreaValue && setPlayerList(splitPlayerList(textAreaValue))
          }
        >
          Clickly
        </button>
      </div>
    );
  } else {
    console.log(playerList);

    return (
      <div className="App">
        <Voting players={playerList} />
      </div>
    );
  }
}

export default App;
