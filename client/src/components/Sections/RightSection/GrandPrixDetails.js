import { useParams } from 'react-router-dom';
import { useSwitchPair } from '../../../hooks/useSwitchPair';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavigationBox, Wrapper } from './styles';
import BasicGpInfo from './Info/BasicGpInfo';
import Race from './Race/Race';
import Info from './Info/Info';
import { categoryEvents } from '../../../utils/categoryEvents';

const GrandPrixDetails = () => {
  const { gpId, catName } = useParams();
  const [gpData, setGpData] = useState(null);
  const [events, setEvents] = useState([]);
  const [tab, tabsJSX] = useSwitchPair();
  const allGps = useSelector((state) => state.catData.grandPrixesOfSeason);

  useEffect(() => {
    if (allGps != null) {
      const findedGp = allGps.find((gp) => gp.id === parseInt(gpId));
      setEvents(categoryEvents(catName));
      setGpData(findedGp);
    }
  }, [catName, allGps, gpId]);

  let componentResult;
  if (tab && gpData) {
    componentResult = (
      <Race
        events={events}
        nameCategory={catName}
        closedState={gpData.closedState}
      />
    );
  } else if (gpData) {
    componentResult = <Info details={gpData} events={events} />;
  }

  return (
    <section>
      <NavigationBox>
        <BasicGpInfo gpData={gpData} />
        <Wrapper>{tabsJSX('Race', 'Info', 'secondary', null)}</Wrapper>
      </NavigationBox>
      {componentResult}
    </section>
  );
};

export default GrandPrixDetails;
