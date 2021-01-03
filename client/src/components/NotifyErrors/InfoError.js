import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  grid-column: ${({ type }) => (type === 'network-error' ? '1/6' : 'auto')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    width: 150px;
  }
  & > p {
    font-weight: bold;
    font-size: 1em;
    text-shadow: 1px 2px 10px hsla(0, 2%, 64%, 0.4);
    text-align: center;
  }
  @media (min-width: 600px) {
    padding: 0 50px;
    & > p {
      font-size: 1.5em;
    }
    & > img {
      width: 155px;
    }
  }
`;

const InfoError = ({ icon, text, type }) => {
  return (
    <Wrapper type={type}>
      <img src={icon} alt="Icon" />
      <p>{text}</p>
    </Wrapper>
  );
};

export default InfoError;
