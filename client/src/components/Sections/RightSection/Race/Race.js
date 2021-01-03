import { useEffect, useState } from 'react';
import { Wrapper, Selector } from './styles';
import EventResultList from './EventResultList';
import { DateTime } from 'luxon';
import Error from '../../../NotifyErrors/Error';

const Race = ({ events, nameCategory, closedState }) => {
  const [pickedEvent, setPickedEvent] = useState(null);

  useEffect(() => {
    setPickedEvent({
      evType: events[0],
      catType: nameCategory,
    });
  }, [events, nameCategory]);

  function pickEventRace({ target }) {
    setPickedEvent({
      evType: target.options[target.selectedIndex].dataset.eventtype,
      catType: nameCategory,
    });
  }
  let renderOptions;
  if(events){
    renderOptions = events.map((el, index) => {
      const customData = DateTime.local();
      const date = `${customData.day} ${customData.monthLong.substr(
        0,
        3
      )}, ${customData.toFormat('HH:mm')}`;
      return (
        <option value={el} key={index} data-eventtype={el}>
          {el}, {date}
        </option>
      );
    });
  }


  return (
    <Wrapper>
      <Selector onChange={pickEventRace}>{renderOptions}</Selector>
      <p>(Random data)</p>
      {closedState ? (
        <EventResultList type={pickedEvent} />
      ) : (
        <Error type="no-results" />
      )}
    </Wrapper>
  );
};

export default Race;
