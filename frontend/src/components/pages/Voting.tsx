import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

export type Player = {
  name: string;
}

type VoteProps = {
  players: Player[];
  gameId: string;
}

function VoteTable(props: VoteProps) {
  const { players } = props;
  const [voted, setVoted] = useState<string>('');

  console.log(players);

  const playerElems = players.map(player => (
    <tr key={player.name}>
      <td>
        <input value={player.name} name="vote" type="radio"
          onChange={e => e.target.checked && setVoted(e.target.value)} id={`vote-${player.name}`} />
      </td>
      <td>
        <label
          htmlFor={`vote-${player.name}`}>
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
      Voted: {voted}
      <button >Clicky</button>
    </Table>
  );
}

export function Voting(props: VoteProps) {
  return (<VoteTable  {...props} />);
}
