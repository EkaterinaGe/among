import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
`;

export const Header = () => {
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
    </StyledHeader>
  );
};
