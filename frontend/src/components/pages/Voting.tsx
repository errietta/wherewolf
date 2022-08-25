import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";

export type Player = {
  name: string;
};

type VoteTableProps = VoteProps & {
  onSubmit: (playerName: string) => void;
};

type VoteProps = {
  players: Player[];
  gameId: string;
};

function VoteTable(props: VoteTableProps) {
  //const { players } = props;
  const players: Player[] = [
    { name: "Rosie Groves" },
    { name: "Rey Meeland" },
    { name: "Jacky Blamey" },
    { name: "Cristiano Allon" },
    { name: "Lowrance Putten" },
    { name: "Maryellen Havvock" },
    { name: "Kanya Baulcombe" },
    { name: "Leola Habens" },
    { name: "Illa Swaden" },
    { name: "Orsola Garatty" },
    { name: "Bentley Cuningham" },
    { name: "Toddie Weerdenburg" },
    { name: "Nickola Dewicke" },
    { name: "Kevin Mountstephen" },
    { name: "Alicea Raulin" },
    { name: "Shea Truitt" },
    { name: "Aldis Paradin" },
    { name: "Janis Tzarkov" },
    { name: "Pall Dalgety" },
    { name: "Manny Nathan" },
  ];
  const [voted, setVoted] = useState<string>("");

  console.log(players);

  const onSubmit = () => {
    if (!voted) {
      return;
    }

    props.onSubmit(voted);
  };

  const playerElems = players.map((player) => (
    <tr key={player.name}>
      <td>
        <input
          value={player.name}
          name="vote"
          type="radio"
          onChange={(e) => e.target.checked && setVoted(e.target.value)}
          id={`vote-${player.name}`}
        />
      </td>
      <td>
        <label
          className="fullWidth fullHeight voteLabel"
          htmlFor={`vote-${player.name}`}
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
        <p>Voting for: {voted}</p>
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

function VoteResult({ playerName }: { playerName: string }) {
  return (
    <div>
      <>Voted {{ playerName }}</>
    </div>
  );
}

export function Voting(props: VoteProps) {
  const [votedPlayerName, setVotedPlayerName] = useState<string>("");

  if (!votedPlayerName) {
    return (
      <VoteTable {...props} onSubmit={(player) => setVotedPlayerName(player)} />
    );
  } else {
    return <VoteResult playerName={votedPlayerName}></VoteResult>;
  }
}
