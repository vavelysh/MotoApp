import styled from 'styled-components';
export const Centerus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({height}) => height ? height : 'auto'};
`