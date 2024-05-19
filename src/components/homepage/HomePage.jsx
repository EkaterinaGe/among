import { Input } from './Input';
import styled from 'styled-components';
import React, { useState } from 'react';
import { players as hardPlayers } from '../players';
import Select from 'react-select';
import { PlayerImage } from '../../Image';

const StyleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const StyleButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  color: white;
  transition: 0.2s linear;
  background: #ba559a;
  &:hover {
    background: #2e3a57;
    box-shadow: none;
    position: relative;
    top: 5px;
  }
`;

export const HomePage = ({ handleSubmit }) => {
  const [playersInfo, setPlayersInfo] = useState({
    players: [],
    mafia: 0,
  });

  const handle = () => {
    const mafiaCount = Number(playersInfo.mafia);
    if (playersInfo.players.length < mafiaCount * 2) {
      alert('Слишком много мафий');
      return;
    }
    handleSubmit(playersInfo);
  };

  return (
    <StyleBlock>
      <h1 style={{ color: 'white', WebkitTextStroke: '1px black', fontWeight: '900' }}>Among Us</h1>
      <Select
        style={{ width: '300px' }}
        isMulti
        blurInputOnSelect={false}
        closeMenuOnSelect={false}
        styles={{
          input: (baseStyles) => ({
            ...baseStyles,
            width: '300px',
          }),
        }}
        onChange={(value) => {
          console.log(value);
          setPlayersInfo({ ...playersInfo, players: value });
        }}
        options={hardPlayers}
        formatOptionLabel={(player, info) => (
          <div className='country-option'>
            {/* {info.context != 'value' && ( */}
            <PlayerImage color={player.color} spotColor={player.spotColor} scale={0.5} />
            {/* )} */}
            <span>{player.label}</span>
          </div>
        )}
      />
      <Input onChange={(e) => setPlayersInfo({ ...playersInfo, mafia: e.target.value })} />
      <StyleButton onClick={handle}>Готово</StyleButton>
    </StyleBlock>
  );
};
