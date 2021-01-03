import styled from 'styled-components';
import { backgroundCases } from '../../../../utils/backgroundCases';

export const BackgroundContainer = styled.section`
  color: white;
  position: relative;
  height: 200px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 1px 1px 5px hsla(0, 1%, 59%, 0.3);
    background-size: cover;
    background-position: center;
    filter: brightness(50%);
    background-image: url(${({ categoryName }) =>
      backgroundCases(categoryName)});
    transition: background-image .5s ease-out;
  }
  & > section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;
export const SeasonArea = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 25px;
  & > p {
    font-size: 1.5em;
    font-weight: 600;
  }
  & > select {
    outline: none;
    border: 1px solid white;
    border-radius: 3px;
    font-size: 1.2em;
    margin-left: 20px;
    width: 80px;
    height: 30px;
    color: white;
    background-color: transparent;
  }
  & option {
    margin: 20px;
    text-align: center;
    color: white;
    background-color: black;
  }
`;

export const SeasonAreaNav = styled.nav`
  display: flex;
  height: 40px;
`;
