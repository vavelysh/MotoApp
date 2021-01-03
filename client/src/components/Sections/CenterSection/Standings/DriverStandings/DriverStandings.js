import {
  Image,
  ResultHeader,
  ResultItem,
  SpanDriver,
  SpanRest,
} from '../styles';
import { colorChooser } from '../../../../../utils/colorChooser';
import DriverBox from '../../../../UI/DriverBox';
import { Figure } from '../../../../UI/Figure';

const DriverStandings = ({ standings }) => {
  let positionCounter = 0;
  let renderDrivers = standings.map((res) => {
    const color = colorChooser(res.team.name);
    return (
      <ResultItem option="Drivers" key={res.id}>
        <Figure color={color} />
        <span>{++positionCounter}</span>
        <Image src={res.driver.faceImgUrl} alt={res.driver.firstName} />
        <DriverBox
          firstName={res.driver.firstName}
          lastName={res.driver.lastName}
          teamName={res.team.name}
          nationImage={res.driver.nation.imageUrl}
        />
        <span>{res.wins}</span>
        <span>{res.polePositions}</span>
        <span>{res.podiums}</span>
        <strong>{res.points}</strong>
      </ResultItem>
    );
  });
  return (
    <>
      <ResultHeader>
        <span />
        <span>Pos</span>
        <SpanDriver>Drivers</SpanDriver>
        <SpanRest>Wins | Pole positions | Podiums | Pts</SpanRest>
      </ResultHeader>
      {renderDrivers}
    </>
  );
};

export default DriverStandings;
