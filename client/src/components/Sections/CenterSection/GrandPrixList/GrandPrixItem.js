import { DateTime } from 'luxon';
import { useRouteMatch } from 'react-router-dom';
import { LinkGP } from './styles';

const GrandPrixItem = ({ name, begin, end, id, flagUrl, statusGP }) => {
  const match = useRouteMatch();
  const customDate = `${DateTime.fromISO(begin).day} - ${
    DateTime.fromISO(end).day
  } ${DateTime.fromISO(end).monthShort}`;
  const checkyear = DateTime.fromISO(end).year < DateTime.local().year;
  let additionalComment;
  if(checkyear && statusGP){
    additionalComment = null
  } else if(!checkyear) {
    additionalComment = null;
  } else if(!statusGP && !checkyear){
    additionalComment = null;
  } else {
    additionalComment = 'Canceled'
  }
  return (
    <LinkGP to={`${match.url}/gp/${id}`} status={statusGP ? 1 : 0}>
      <img src={flagUrl} alt="GP Item" />
      <p>{name}</p>
      <span>
        ⚫ <span>{customDate}</span>
      </span>
      <strong>{additionalComment}</strong>
    </LinkGP>
  );
};

export default GrandPrixItem;
