import { useSwitchPair } from '../../../../hooks/useSwitchPair';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { getStandingsOfSeason } from '../../../../queries/queries';
import Error from '../../../NotifyErrors/Error';
import DriverStandings from './DriverStandings/DriverStandings';
import TeamStandings from './TeamStandings/TeamStandings';
import { NavContainer } from './styles';
import { CircularProgress } from '@material-ui/core';
import { Centerus } from '../../../UI/Centerus';

const Standings = () => {
  const currentID = useSelector((state) => state.catData.currentSeasonId);
  const [tab, tabsJSX] = useSwitchPair();
  const { data, error, isLoading } = useQuery(
    ['getStandings', currentID],
    getStandingsOfSeason,
    {
      retry: 1,
      staleTime: Infinity,
    }
  );
  let componentResult;
  if (isLoading) componentResult = (
    <Centerus height='400px'>
      <CircularProgress color="secondary" />
    </Centerus>
  )
  if (error) componentResult = <Error type="no-results" />;
  if (tab && data) {
    componentResult = <DriverStandings standings={data} />;
  } else if (data) {
    componentResult = <TeamStandings standings={data} />;
  }
  return (
    <>
      <NavContainer>
        {tabsJSX('Drivers', 'Teams', 'secondary', null)}
      </NavContainer>
      <div>{componentResult}</div>
    </>
  );
};

export default Standings;
