import { PlayerImage } from '../Image';
import styled from 'styled-components';
import fon from '../fon.png';

const ModalDelete = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${fon});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  padding: 20px;
  z-index: 1000;
  width: 100vw;
  height: 80vh;
`;

export const ModalDeleted = ({ deletedPlayer, setDeletedPlayer }) => {
  
  return (
    <ModalDelete onClick={() => setDeletedPlayer(null)}>
      <PlayerImage color={deletedPlayer.color} spotColor={deletedPlayer.spotColor} />
      <h1 style={{ color: 'black', WebkitTextStroke: '0.5px black', margin: '0' }}>{deletedPlayer.label}</h1>
      <h1 style={{ color: 'white', WebkitTextStroke: '2px black', fontSize: '80px', margin: '0' }}>{!deletedPlayer.status ? 'Член экипажа' : 'Предатель'}</h1>
    </ModalDelete>
  );
};
