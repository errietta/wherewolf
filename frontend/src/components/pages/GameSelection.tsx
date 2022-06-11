import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GameSelection(props: { onJoinGame: (gameId: string) => void }) {
  const [gameId, setGameId] = useState<string>();
  const { onJoinGame } = props;

  return (
    <Form
      className="game-selection"
      style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
    >
      <h1>Welcome! Please join a game</h1>
      <Form.Group className="mb-3" controlId="gameId">
        <Form.Label>Game id</Form.Label>
        <Form.Control
          type="text"
          name="gameId"
          id="gameId"
          onChange={(e) => setGameId(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="button"
        id="joinGame"
        name="joinGame"
        onClick={() => gameId && onJoinGame(gameId)}
      >
        Join game
      </Button>

      <Form.Group style={{ marginTop: "30px" }}>
        <Form.Label>Or create a new game</Form.Label>
      </Form.Group>
      <Button
        variant="secondary"
        type="button"
        id="createGame"
        name="createGame"
      >
        Create a new game
      </Button>
    </Form>
  );
}
