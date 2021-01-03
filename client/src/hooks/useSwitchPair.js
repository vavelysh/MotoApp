import { useState } from 'react';
import { Tab } from '../components/UI/Tab';

export const useSwitchPair = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);

  function tabsHandler() {
    if (setFirst && second === false) {
      setFirst(false);
      setSecond(true);
    } else {
      setSecond(false);
      setFirst(true);
    }
  }

  const tabs = (option1, option2, mode, year) => {
    return (
      <>
        <Tab onClick={tabsHandler} mode={mode} active={first}>
          {option1}
        </Tab>
        <Tab onClick={tabsHandler} mode={mode} active={!first}>
          {option2 === 'Standings' ? `${option2} ${year}` : `${option2}`}
        </Tab>
      </>
    );
  };
  return [first, tabs];
};
