import { useState } from 'react';
import { HomePage } from './components/homepage/HomePage';
import { AllPlayers } from './components/ AllPlayers';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { DeletePlayers } from './components/DeletePlayers';
import { Votes } from './components/Votes';

function App() {
  const [playersInfo, setPlayersInfo] = useState({
    players: [],
    mafia: 0,
  });
  const [players, setPlayers] = useState({
    players: [],
    mafia: 0,
  });

  const handlePlayersSubmit = (info) => {
    setPlayers(info);
  };

  return (
    <div className='App'>
      <Header playersInfo={playersInfo} setPlayersInfo={setPlayersInfo} />
      <Routes>
        <Route
          path='/'
          element={
            <HomePage
              handleSubmit={handlePlayersSubmit}
              playersInfo={playersInfo}
              setPlayersInfo={setPlayersInfo}
            />
          }
        ></Route>
        <Route path='/AllPlayers' element={<AllPlayers playersInfo={players} />}></Route>
        <Route
          path='/DeletePlayers'
          element={<DeletePlayers playersInfo={playersInfo} setPlayersInfo={setPlayersInfo} />}
        ></Route>
        <Route
          path='/Votes'
          element={<Votes playersInfo={playersInfo} setPlayersInfo={setPlayersInfo} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
