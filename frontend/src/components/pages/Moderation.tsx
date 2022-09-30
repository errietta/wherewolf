import { useState } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

import { Player } from '../../types';

function splitPlayerList(playerText: string): Player[] {
  // FIXME: determine id some sane way
  return playerText.split("\n").map((name, idx) => ({ id: '' + idx, name: name.trim() }));
}

function Moderation() {
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [textAreaValue, setTextAreaValue] = useState<string>();

  if (!playerList.length) {
    return (
      <div className="Moderation">
            <Form>
              <Form.Group className="mx-auto mt-3 mb-3 w70 block" >
                <Form.Text>
                  Enter the list of player names, each on one line.
                </Form.Text>

                <Form.Control
                as="textarea"
                rows={5} onChange={(e) => setTextAreaValue(e.target.value)} />
                <Button
                  className="mt-3"
                  variant="primary"
                  type="button"
                  id="startGame"
                  name="startGame"
                  onClick={() =>
                    textAreaValue && setPlayerList(splitPlayerList(textAreaValue))
                  }
                >
                  Start game
                </Button>
              </Form.Group>
            </Form>
      </div>
    );
  }

  return <Link to="/game/">Go to game</Link>

}

export default Moderation;
