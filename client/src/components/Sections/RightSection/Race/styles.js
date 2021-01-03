import styled from 'styled-components';
import { gridChooser } from '../../../../utils/gridChooser';

export const Wrapper = styled.div`
  margin-top: 10px;

  & > p {
    padding: 10px 0;
    font-size: 13px;
  }
`;

export const Selector = styled.select`
  min-width: 130px;
  height: 35px;
  background-color: ${({ theme }) => theme.body};
  border-radius: 2px;
  padding: 5px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
`;
export const ResultHeader = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: ${({ evCombination }) => {
    return gridChooser(evCombination);
  }};
  grid-template-rows: minmax(30px, 1fr);
  font-size: 11px;
  justify-items: center;
  align-items: center;
`;

export const ResultItem = styled.div`
  color: ${({ theme, color }) => {
    return color ? theme.text : 'grey';
  }};
  font-size: 13px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: ${({ evCombination }) => {
    return gridChooser(evCombination);
  }};
  grid-template-rows: minmax(30px, 1fr);
  justify-items: center;
  padding: 0 5px;
  align-items: center;
`;
