import styled from 'styled-components';

export const Separator = styled.div`
  display: none;
  width: 1px;
  background-color: ${({ theme }) => theme.secondaryColor};
  margin: 0 10px;
  @media (min-width: 1000px) {
    display: block;
  }
`;
