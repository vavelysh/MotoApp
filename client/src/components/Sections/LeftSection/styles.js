import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CategoryTitle = styled.header`
  padding: 5px 20px;
  background-color: ${({ theme }) => theme.secondaryColor};
  height: max-content;
  text-transform: uppercase;
  border-radius: 5px;
  & > h1 {
    font-size: 1.1rem;
  }
`;

export const ListContainer = styled.nav`
  margin-top: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
  text-decoration: none;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 2px;
  & > img {
    width: 35px;
    margin: 0 15px;
  }
  & > p {
    font-size: 1.1rem;
  }
  &.active {
    background-color: ${({ theme }) => theme.secondaryColor};
    border-bottom: 1px solid transparent;
  }
  &:hover,
  &.active:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;
