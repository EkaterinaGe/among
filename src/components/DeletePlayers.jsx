import styled from 'styled-components';
import { PlayerImage } from '../Image';
import { useState } from 'react';
import { ModalDeleted } from './ModalDeleted';

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

export const DeletePlayers = ({ setPlayersInfo, playersInfo }) => {
  const [isActive, setIsActive] = useState(false);
  const [deletedPlayer, setDeletedPlayer] = useState(null);

  const deletePlayers = (label) => {
    playersInfo.players.forEach((player) => player.votes = 0);
    const deletesss = playersInfo.players.filter((player) => player.label !== label);
    setPlayersInfo({
      players: deletesss,
      mafia: playersInfo.mafia,
    });
    setIsActive(false);
  };

  return (
    <StyleList>
      {playersInfo.players.map((player) => (
        <StyleElem onClick={() => setIsActive(true)} key={player.label}>
          <PlayerImage color={player.color} spotColor={player.spotColor} />
          <h2 style={{ color: 'white', WebkitTextStroke: '0.5px black' }}>{player.label}</h2>
          {isActive && (
            <div>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  deletePlayers(player.label);
                  setDeletedPlayer(player)
                }}
              >
                Точно!
              </button>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  setIsActive(false);
                }}
              >
                Ошибочка
              </button>
            </div>
          )}
        </StyleElem>
      ))}
      {deletedPlayer && <ModalDeleted deletedPlayer={deletedPlayer} setDeletedPlayer={setDeletedPlayer}/>}
    </StyleList>
  );
};
