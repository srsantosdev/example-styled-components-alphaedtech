import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Input = styled.input`
  border: 4px solid #3333;

  background: #fff;
  padding: 4px 16px;

  ${props => props.error && css`
    border-color: #F54748;
  `}
`

export const Button = styled.button`
  border: 0;
  background: #343F56;
  color: #FFFFFF;

  border-radius: 5px;
  padding: 8px 16px;

  ${props => props.color === 'primary' && css`
    background: #3B14A7;
  `}

  ${props => props.color === 'secondary' && css`
    background: #FF449F;
  `}
`