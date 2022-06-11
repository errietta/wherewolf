
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Player, Voting } from './components/pages/Voting';
import { useState } from 'react';

function splitPlayerList(playerText: string) {
  return playerText.split("\n").map(
    name => ( { name: name.trim() } )
  );
}

function App() {
  let moderationMode = true;
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [textAreaValue, setTextAreaValue] = useState<string>('');

  if (moderationMode && !playerList.length) {
    return (
    <div className="App">
      <textarea onChange={
        e => setTextAreaValue(e.target.value)
      }/>
      <br/>
      <button onClick={
        (e) => setPlayerList(
          splitPlayerList(textAreaValue)
        )}>Clickly</button>
    </div>
  );

  }
  else {
    console.log(playerList);
    return (
      <div className="App">
        <Voting players={
          playerList
        } />
      </div>
    );
  }
}

export default App;
