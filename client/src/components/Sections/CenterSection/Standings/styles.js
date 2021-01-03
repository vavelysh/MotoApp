import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  padding: 10px 0 0 0;
  background: ${({ theme }) => theme.secondaryColor};
  height: 50px;
`;

export const ResultHeader = styled.div`
  margin-top: 20px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: ${({ option }) => {
    if (option === 'Drivers') {
      return '20px 20px 20px 3fr auto';
    }
    return '20px auto auto 1fr';
  }};
  grid-template-rows: minmax(30px, 1fr);
  align-items: center;
  color: grey;
  font-size: 0.8em;
  font-weight: bold;
`;
export const ResultItem = styled.div`
  font-size: 13px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: ${({ option }) => {
    if (option === 'Drivers') {
      return 'auto auto 1fr 3fr repeat(4, 1fr)';
    }
    return 'auto auto 3fr 1fr';
  }};
  align-items: center;
  grid-template-rows: minmax(30px, 1fr);
  padding: 5px 5px;
  border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
  & > strong {
    justify-self: self-end;
    font-size: 1.1em;
  }
`;

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: self-start;
  align-items: center;
  & div:first-child {
    display: flex;
    align-items: center;
  }
  & span {
    font-size: 1.2em;
  }
  & img {
    width: 45px;
    margin: 10px;
  }
`;
export const Image = styled.img`
  width: 45px;
  margin: 5px;
`;

export const SpanDriver = styled.div`
  justify-self: self-start;
  grid-column: 3/4;
`;
export const SpanRest = styled.div`
  justify-self: self-end;
`;
