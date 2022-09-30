import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";

import { Player } from '../../types';
import {  Voting } from "./Voting";

function Game() {
  const { id: gameId } = useParams();
  const playersList: Player[] = [];
  console.log(useParams());

  if (!gameId) {
    return <Link to="/Home">Back home</Link>
  }

  return <Voting gameId={gameId} players={playersList} />
}

export default Game;
