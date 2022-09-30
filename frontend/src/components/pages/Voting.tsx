import { useState } from "react";
import { Button, Table } from "react-bootstrap";

import { Player } from '../../types';

type VoteTableProps = VoteProps & {
  playerLookup: Record<string, Player>;
  onSubmit: (playerId: string) => void;
};

type VoteProps = {
  players: Player[];
  gameId: string;
};

function VoteTable(props: VoteTableProps) {
  const { players, playerLookup } = props;

  const [voted, setVoted] = useState<string>("");

  console.log(players);

  const onSubmit = () => {
    if (!voted) {
      return;
    }

    props.onSubmit(voted);
  };

  const playerElems = players.map((player) => (
    <tr key={player.id} className={ voted && voted === player.id ? 'votedActive' : '' } >
      <td>
        <div className="voteInput">
          <input
            value={player.id}
            name="vote"
            type="radio"
            onChange={(e) => e.target.checked && setVoted(e.target.value)}
            id={`vote-${player.id}`}
          />
        </div>
      </td>
      <td>
        <label
          className="fullWidth fullHeight voteLabel"
          htmlFor={`vote-${player.id}`}
        >
          {player.name}
        </label>
      </td>
    </tr>
  ));

  return (
    <div className="fullScreenHeight">
      <p>Select a player to vote. Scroll the table to see all options</p>

      <div className="voteDiv">
        <Table className="voteTable">
          <thead>
            <tr>
              <th className="voteHeader">Vote</th>
              <th>Player</th>
            </tr>
          </thead>
          <tbody>{playerElems}</tbody>
        </Table>
      </div>
      <div>
        <p>{ voted ? `Voting for: ${playerLookup[voted].name}` : '' }</p>
        <Button
          variant="primary"
          type="button"
          id="voteBtn"
          name="voteBtn"
          disabled={!voted}
          onClick={() => onSubmit()}
        >
          Submit vote
        </Button>
      </div>
    </div>
  );
}

function VoteResult({ player }: { player: Player }) {
  return (
      <div className="bg-light p-5 rounded-lg m-3">
        <h1 className="display-4">Vote successful!</h1>

        <p className="lead">You have voted for { player.name }</p>
        <hr className="my-4" />
        <p>Your vote has been recorded. You can now go back to your game.</p>
        <Button
          type="button"
          variant="primary"
          onClick={ () => window.location.reload() }
        >
          Go back to the game
        </Button>
      </div>
    );
}

export function Voting(props: VoteProps) {
  const [votedPlayerId, setVotedPlayerId] = useState<string>("");
  const { /* players, */ gameId } = props;

  const players: Player[] = [
    { id: "1", name: "Rosie Groves" },
    { id: "2", name: "Rey Meeland" },
    { id: "3", name: "Jacky Blamey" },
    { id: "4", name: "Cristiano Allon" },
    { id: "5", name: "Lowrance Putten" },
    { id: "6", name: "Maryellen Havvock" },
    { id: "7", name: "Kanya Baulcombe" },
    { id: "8", name: "Leola Habens" },
    { id: "9", name: "Illa Swaden" },
    { id: "10", name: "Orsola Garatty" },
    { id: "11", name: "Bentley Cuningham" },
    { id: "12", name: "Toddie Weerdenburg" },
    { id: "13", name: "Nickola Dewicke" },
    { id: "14", name: "Kevin Mountstephen" },
    { id: "15", name: "Alicea Raulin" },
    { id: "16", name: "Shea Truitt" },
    { id: "17", name: "Aldis Paradin" },
    { id: "18", name: "Janis Tzarkov" },
    { id: "19", name: "Pall Dalgety" },
    { id: "20", name: "Manny Nathan" },
  ];

  const playerLookup = players.reduce((prev: Record<string, Player>, current: Player) => {
    return { ...prev, [current.id]: current }
  }, {});

  console.log(votedPlayerId);

  if (!votedPlayerId) {
    return (
      <VoteTable
        playerLookup={playerLookup}
        players={players}
        gameId={gameId}
        onSubmit={(player) => setVotedPlayerId(player)} />
    );
  } else {
    const player = playerLookup[votedPlayerId];

    return <VoteResult player={player}></VoteResult>;
  }
}
