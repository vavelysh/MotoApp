import { useSelector } from 'react-redux';
import { resultHeaderChooser } from '../../../../utils/resultHeaderChooser';
import { colorChooser } from '../../../../utils/colorChooser';
import { ResultHeader, ResultItem } from './styles';
import { Figure } from '../../../UI/Figure';
import DriverBox from '../../../UI/DriverBox';
import { useEffect, useState } from 'react';
import { getRandomResults } from '../../../../queries/queries';
import { CircularProgress } from '@material-ui/core';
import { Centerus } from '../../../UI/Centerus';

const EventResultList = ({ type }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const ses_id = useSelector((state) => state.catData.currentSeasonId);

  useEffect(() => {
    async function fetchResult() {
      setLoading(true);
      try {
        const getRandomData = await getRandomResults(ses_id);
        setLoading(false);
        setResult(getRandomData);
      } catch {
        setResult(null);
        setLoading(false);
      }
    }

    fetchResult();
  }, [type, ses_id]);

  const renderHeaders = type ? resultHeaderChooser(type) : null;
  let positionCounter = 0;
  const pointsArray = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
  let componentResult;

  if (loading) {
    componentResult = (
      <Centerus height='400px'>
        <CircularProgress color="secondary" />
      </Centerus>
    );
  }
  if (result && !loading) {
    componentResult = result.map((el, index) => {
      const color = colorChooser(el.team.name);
      let points = 0;
      let laps;
      if (index < 10) {
        points = pointsArray[index];
      }
      if (el.statusRace) {
        laps = el.laps;
      } else {
        laps = el.laps - el.grid;
      }
      return (
        <ResultItem
          evCombination={type}
          key={el.driver.id}
          color={el.statusRace ? 1 : 0}
        >
          <Figure color={color} />
          <span>{++positionCounter}</span>
          <DriverBox
            firstName={el.driver.firstName}
            lastName={el.driver.lastName}
            nationImage={el.driver.nation.imageUrl}
            teamName={el.team.name}
          />
          {type.evType.charAt(0) === 'R' ? <span>{el.grid}</span> : null}
          {type.evType.charAt(0) === 'R' ? <span>{el.pits}</span> : null}
          {<span>{laps}</span>}
          {type.evType.charAt(0) === 'R' ? <strong>{points}</strong> : null}
          {el.statusRace && el.time ? <span>{el.time}</span> : 'DNF'}
        </ResultItem>
      );
    });
  }
  return (
    <>
      <ResultHeader evCombination={type}>{renderHeaders}</ResultHeader>
      {componentResult}
    </>
  );
};

export default EventResultList;
