import styled from 'styled-components';
import { Status } from './Status';
import { useEffect, useState } from 'react';
import { PlayerImage } from '../Image';

const StyleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyleElem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AllPlayers = ({ playersInfo }) => {
  const [players, setPlayers] = useState(playersInfo.players);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  const handleClick = (player) => {
    setCurrentPlayer(player);
  };

  useEffect(() => {
    const mafiaIndexes = [];
    while (mafiaIndexes.length < Number(playersInfo.mafia)) {
      const index = randomInteger();
      if (!mafiaIndexes.find((v) => v === index)) mafiaIndexes.push(index);
    }
    const playersWithMafia = players.map((player, index) => {
      if (mafiaIndexes.includes(index)) {
        return {
          ...player,
          status: true,
        };
      }
      return player;
    });
    setPlayers(playersWithMafia);
  }, [playersInfo.mafia]);

  function randomInteger() {
    let rand = Math.random() * playersInfo.players.length;
    return Math.floor(rand);
  }

  return (
    <StyleList>
      {players.map((player) => (
        <StyleElem onClick={() => handleClick(player)} key={player.label}>
          <PlayerImage color={player.color} spotColor={player.spotColor} />
          <h2 style={{ color: 'white', WebkitTextStroke: '0.5px black' }}>{player.label}</h2>
        </StyleElem>
      ))}
      {currentPlayer && (
        <Status player={currentPlayer} setCurrentPlayer={setCurrentPlayer}></Status>
      )}
    </StyleList>
  );
};
