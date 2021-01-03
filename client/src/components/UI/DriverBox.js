import React from 'react';
import styled from 'styled-components';

export const Driver = styled.div`
  display: flex;
  justify-self: flex-start;
  & > div {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
  }

  & > div > div {
    display: flex;
    align-items: center;
  }

  & > div > span {
    color: gray;
    font-size: 13px;
  }
  & img {
    width: 15px;
    margin: 5px;
  }
`;

const DriverBox = ({ lastName, firstName, teamName, nationImage }) => {
  const cutName = firstName.substr(0, 1);
  return (
    <Driver>
      <div>
        <div>
          <img src={nationImage} alt="Flag" />
          <span>
            {lastName} {cutName}.
          </span>
        </div>
        <span>{teamName}</span>
      </div>
    </Driver>
  );
};

export default DriverBox;
