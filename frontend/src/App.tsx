import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Home from "./components/pages/Home";
import Game from "./components/pages/Game";
import Moderation from "./components/pages/Moderation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/moderate" element={<Moderation />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
