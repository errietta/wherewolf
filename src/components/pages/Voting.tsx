import React from 'react';
import {Table} from 'react-bootstrap';

type Player = {
  name: string;
}

type VoteProps = {
  players: Player[];
};

function VoteTable(props: VoteProps) {
  const { players } = props;

  console.log(players);

  const playerElems = players.map(player => (
    <tr key={player.name}>
      <td><input name="vote" type="radio" id={`vote-${player.name}`} /></td>
      <td>
      <label htmlFor={`vote-${player.name}`}>
      {player.name}
      </label>
      </td>
      </tr>
  ));
  console.log(playerElems);

  return (
    <Table>
    <>
    <thead>
      <tr>
        <th>Vote</th>
        <th>Player</th>
      </tr>
    </thead>
    <tbody>
      {playerElems}
    </tbody>
    </>
    </Table>
  );
}

export function Voting(props: VoteProps) {
  return (<VoteTable players={props.players} />);
}
