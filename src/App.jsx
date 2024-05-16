import { useState } from 'react';
import { HomePage } from './components/homepage/HomePage';
import { AllPlayers } from './components/ AllPlayers';

function App() {
  const [isActive, setIsActive] = useState(false);
  const [players, setPlayers] = useState({
    players: [],
    mafia: 0,
  });

  const handlePlayersSubmit = (info) => {
    setIsActive(true);
    setPlayers(info);
  };

  return (
    <div className='App'>
      {!isActive && <HomePage handleSubmit={handlePlayersSubmit} />}
      {isActive && <AllPlayers playersInfo={players} />}
    </div>
  );
}

export default App;
