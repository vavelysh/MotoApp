import styled from 'styled-components';

export const Figure = styled.div`
  border-right: 15px solid transparent;
  width: 25px;
  border-top: 35px solid ${({ color }) => color};
  position: relative;
`;
