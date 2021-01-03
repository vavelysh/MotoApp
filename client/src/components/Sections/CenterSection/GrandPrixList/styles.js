import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkGP = styled(NavLink)`
  display: grid;
  grid-template-columns: 70px 2fr 1fr;
  grid-template-rows: 2fr 1fr;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
  text-decoration: none;
  color: ${({ status, theme }) => (status ? theme.text : 'grey')};
  transition: background-color 0.2s ease-out;
  padding: 5px 0;
  &:last-child {
    border-bottom: 1px solid transparent;
  }
  &.active {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
  & > img {
    justify-self: center;
    width: 30px;
    grid-column: 1/2;
    grid-row: 1/2;
  }
  & > p {
    font-size: 1.3em;
    text-transform: uppercase;
  }
  & > span {
    padding: 5px 0;
    font-size: 0.7em;
    grid-column: 2/3;
    grid-row: 2/3;
  }
  & > strong {
    align-self: self-start;
    font-size: 0.9em;
    padding: 15px 0;
    font-weight: 300;
    color: red;
    grid-column: 3/4;
    grid-row: 1/3;
  }
  & > span span {
    margin-left: 5px;
  }
`;
