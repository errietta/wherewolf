import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Voting} from './components/pages/Voting';


function App() {
  return (
    <div className="App">
      <Voting players={
        [
          {
            name: "Erry"
          },
          {
            name: "Sheldon"
          },
          {
            name: "Rick"
          },
          {
            name: "Naeem"
          },
          {
            name: "Angela"
          }
        ]
      } />
    </div>
  );
}

export default App;
