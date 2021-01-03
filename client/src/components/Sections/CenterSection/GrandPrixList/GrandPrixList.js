import { useQuery } from 'react-query';
import { getGrandPrixesOfSeason } from '../../../../queries/queries';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../../../NotifyErrors/Error';
import GrandPrixItem from './GrandPrixItem';
import { useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { store_grandPrixes } from '../../../../store/application-data/actions';
import { StyledSkeleton } from '../../../UI/StyledSkeleton';

const GrandPrixList = () => {
  const history = useHistory();
  const route = useRouteMatch();
  const dispatch = useDispatch();
  const currSesId = useSelector((state) => state.catData.currentSeasonId);
  const { data, error, isLoading } = useQuery(
    ['getGps', currSesId],
    getGrandPrixesOfSeason,
    {
      retry: 1,
      staleTime: Infinity,
    }
  );

  useEffect(() => {
    if (data) {
      const { id } = data[0];
      history.push(`${route.url}/gp/${id}`);
      dispatch(store_grandPrixes(data));
    }
  }, [data, dispatch, history, route.url]);

  let componentResult;
  if (isLoading)
    componentResult = (
      <>
        <StyledSkeleton height={50}/>
        <StyledSkeleton height={50}/>
        <StyledSkeleton height={50}/>
        <StyledSkeleton height={50}/>
      </>
    );
  if (error) {
    componentResult = <Error type="no-results" />;
  }
  if (data) {
    componentResult = data.map(
      ({ name, id, startRaceDay, endRaceDay, circuit, closedState }) => {
        return (
          <GrandPrixItem
            key={id}
            id={id}
            name={name}
            begin={startRaceDay}
            end={endRaceDay}
            flagUrl={circuit.nation.imageUrl}
            statusGP={closedState}
          />
        );
      }
    );
  }
  return <div>{componentResult}</div>;
};

export default GrandPrixList;
