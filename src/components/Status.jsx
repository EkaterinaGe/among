import { PlayerImage } from '../Image';
import './Status.css';

export const Status = ({ player, setCurrentPlayer }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setCurrentPlayer(null);
    }
  };

  return (
    <div
      className='StyleBlockModal'
      onClick={() => setCurrentPlayer(null)}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      role='button'
    >
      <h2 style={{ color: 'white' }}>{player.value}</h2>
      <PlayerImage color={player.color}></PlayerImage>
      <h1 style={{ color: 'white' }}> {!player.status ? 'Мирный' : 'мафия'}</h1>
    </div>
  );
};
