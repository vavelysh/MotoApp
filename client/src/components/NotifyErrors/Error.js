import React from 'react';
import InfoError from './InfoError';
import AngryDriver from '../../assets/icons/angry-driver.png';
import FinishDriver from '../../assets/icons/finish-flag.png';

const Error = ({ type }) => {
  switch (type) {
    case 'network-error':
      return (
        <InfoError
          icon={AngryDriver}
          text="Network Error - make sure API is running"
          type={type}
        />
      );
    case 'no-results':
      return <InfoError icon={FinishDriver} text="No results" type={type} />;
    default:
      return null;
  }
};

export default Error;
