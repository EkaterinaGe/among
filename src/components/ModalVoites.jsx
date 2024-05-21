import { PlayerImage } from '../Image';
import styled from 'styled-components';

const ModalVotes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 2px solid black;
  z-index: 1000;
  width: 100vw;
`;

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

export const ModalVoites = ({ playersInfo, label, setSelectedPlayer, setPlayersInfo }) => {
  const currentPlayer = playersInfo.players.find((player) => player.label === label);
  const otherPlayers = playersInfo.players.filter((player) => player.label !== label);
  const handleVotes = (label) => {
    setPlayersInfo({
      players: playersInfo.players.map((player) =>
        player.label === label ? { ...player, votes: player.votes + 1 } : player
      ),
      mafia: playersInfo.mafia,
    });
    setSelectedPlayer(null);
  };
  return (
    <ModalVotes>
      <PlayerImage color={currentPlayer.color} spotColor={currentPlayer.spotColor} />
      <p>{currentPlayer.label}</p>
      <h1>Голосует за:</h1>
      <StyleList>
        {otherPlayers.map((player) => (
          <StyleElem key={player.label} onClick={() => handleVotes(player.label)}>
            <PlayerImage color={player.color} spotColor={player.spotColor} scale={0.5} />
            <h2 style={{ color: 'white', WebkitTextStroke: '0.5px black' }}>{player.label}</h2>
          </StyleElem>
        ))}
      </StyleList>
    </ModalVotes>
  );
};
