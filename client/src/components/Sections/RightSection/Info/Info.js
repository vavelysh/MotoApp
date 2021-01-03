import { CircuitImage, InfoContainer, ListContainer } from '../styles';
import { DateTime } from 'luxon';
import Error from '../../../NotifyErrors/Error';

const Info = ({ details, events }) => {
  const { circuit } = details;
  let renderSchedule = <Error type="no-results" />;
  if (events) {
    renderSchedule = events.map((el, index) => {
      const customData = DateTime.local();
      const date = `${customData.day} ${customData.monthLong.substr(
        0,
        3
      )}, ${customData.toFormat('HH:mm')}`;
      return (
        <div key={index}>
          <span>{el}</span>
          <span>{date}</span>
        </div>
      );
    });
  }
  return (
    <InfoContainer>
      <p>Schedule</p>
      <ListContainer>{renderSchedule}</ListContainer>
      <div>
        <CircuitImage src={circuit.circuitImageUrl} alt={circuit.name} />
      </div>
      <ListContainer>
        <div>
          <span>City</span>
          <span>{circuit.name}</span>
        </div>
        <div>
          <span>Laps</span>
          <span>{circuit.laps}</span>
        </div>
        <div>
          <span>Circuit Length</span>
          <span>{circuit.circuitLength} km</span>
        </div>
        <div>
          <span>Race Distance</span>
          <span>{circuit.raceDistance} km</span>
        </div>
      </ListContainer>
    </InfoContainer>
  );
};

export default Info;
