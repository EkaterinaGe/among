import { PlayerImage } from '../Image';
import styled from 'styled-components';
import kosmonavt from '../kosmonavt.jpeg'

const StyleBlockModal = styled.div`
  width: 100vw;
  display: flex;
  background-image: url(${kosmonavt});
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
`;

export const Status = ({ player, setCurrentPlayer, players }) => {
  const mafiozi = players.filter((player) => player.status === true);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setCurrentPlayer(null);
    }
  };

  return (
    <StyleBlockModal
      onClick={() => setCurrentPlayer(null)}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      role='button'
    >
      {!player.status && (
        <>
          <h2 style={{ color: 'white' }}>{player.value}</h2>
          <PlayerImage color={player.color} spotColor={player.spotColor}></PlayerImage>
        </>
      )}
      <div style={{ display: 'flex' }}>
        {player.status &&
          mafiozi.map((player) => (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <PlayerImage color={player.color} spotColor={player.spotColor} />
              <h2 style={{ color: 'white', WebkitTextStroke: '0.5px black' }}>{player.label}</h2>
            </div>
          ))}
      </div>
      <h1 style={{ color: 'white' }}> {!player.status ? 'Член экипажа' : 'Предатель'}</h1>
    </StyleBlockModal>
  );
};
