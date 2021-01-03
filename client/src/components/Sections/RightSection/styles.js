import styled from 'styled-components';
export const NavigationBox = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
  background-color: ${({ theme }) => theme.secondaryColor};
`;
export const Wrapper = styled.div`
  display: flex;
`;
export const NavigationHeader = styled.header`
  padding: 20px 20px 0 20px;
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  grid-gap: 0 20px;
  & > div {
    display: flex;
    justify-content: center;
    grid-column: 1/2;
    grid-row: 1/3;
  }
  & > div img {
    width: 30px;
  }
  & > p {
    text-transform: uppercase;
    font-weight: 400;
  }
`;
export const HeaderSpan = styled.span`
  font-size: 11px;
  color: gray;
  grid-column: 2/3;
  grid-row: 2/3;
`;

export const InfoContainer = styled.section`
  margin-top: 10px;
  & > p {
    padding: 10px 10px 10px;
    background-color: ${({ theme }) => theme.secondaryColor};
    text-transform: uppercase;
  }
`;
export const ListContainer = styled.div`
  padding: 10px;
  & > div {
    font-size: 0.8em;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
  }
`;
export const CircuitImage = styled.img`
  width: 100%;
  object-fit: contain;
`;
