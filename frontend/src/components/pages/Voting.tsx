import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";

export type Player = {
  name: string;
};

type VoteProps = {
  players: Player[];
  gameId: string;
};

function VoteTable(props: VoteProps) {
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
        <label htmlFor={`vote-${player.name}`}>{player.name}</label>
      </td>
    </tr>
  ));
  console.log(playerElems);

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ height: "80%" }}>
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
        <Button variant="primary" type="button" id="voteBtn" name="voteBtn">
          Submit vote
        </Button>
      </div>
    </div>
  );
}

export function Voting(props: VoteProps) {
  return <VoteTable {...props} />;
}
