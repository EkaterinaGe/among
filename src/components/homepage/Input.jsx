import React from 'react';
import styled from 'styled-components';

const StyleInput = styled.input`
  width: 300px;
  padding: 12px 20px;
  margin: 8px 0;
`;

export const Input = ({ onChange }) => {
  return <StyleInput onChange={onChange} type='number' min='1' max='25' required />;
};
