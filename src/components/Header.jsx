import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
`;

export const Header = (setPlayersInfo, playersInfo) => {
  //   const handleResetVotes = () => {
  //     setPlayersInfo({
  //       players: playersInfo.players.map((player) => {
  //         votes: 0;
  //       }),
  //       mafia: playersInfo.mafia,
  //     });
  //   };
  return (
    <StyledHeader>
      <Link to='/'>
        <button>Выбор игроков</button>
      </Link>
      <Link to='/AllPlayers'>
        <button>Все игроки</button>
      </Link>
      <Link to='/Votes'>
        <button>Голосование</button>
      </Link>
      <Link to='/DeletePlayers'>
        <button>Удаление игрока</button>
      </Link>
      <button>Сброс голосов</button>
    </StyledHeader>
  );
};
