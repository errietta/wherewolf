import { useState } from "react";
import { Link } from "react-router-dom";
import { Player } from "./Voting";

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
		)
	}

	return <Link to="/game/">Go to game</Link>

}

export default Moderation;
