import styled from 'styled-components';
import { PlayerImage } from '../Image';
import { ModalVoites } from './ModalVoites';
import { useState } from 'react';

const StyleElem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Votes = ({ playersInfo, setPlayersInfo }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleClick = (label) => {
    setSelectedPlayer(label);
  };

  return (
    <>
      <StyleList>
        {playersInfo.players.map((player) => (
          <StyleElem key={player.label} onClick={() => handleClick(player.label)}>
            <PlayerImage color={player.color} spotColor={player.spotColor} />
            <h2 style={{ color: 'white', WebkitTextStroke: '0.5px black' }}>{player.label}</h2>
            <p style={{ color: 'black', WebkitTextStroke: '0.5px black' }}>
              Голосов: {player.votes}
            </p>
          </StyleElem>
        ))}
      </StyleList>
      {selectedPlayer && (
        <ModalVoites
          playersInfo={playersInfo}
          label={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
          setPlayersInfo={setPlayersInfo}
        />
      )}
    </>
  );
};
