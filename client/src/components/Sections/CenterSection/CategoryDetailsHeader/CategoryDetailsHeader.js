import { useEffect, useState } from 'react';
import { BackgroundContainer, SeasonArea, SeasonAreaNav } from './styles';
import { DateTime } from 'luxon';
import { useDispatch } from 'react-redux';
import { store_seasonID } from '../../../../store/application-data/actions';

const CategoryDetailsHeader = ({
  pickedCategory: { seasons, name },
  tabsJSX,
}) => {
  const [seasonYear, setSeasonYear] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (seasons.length > 0) {
      const { id, end } = seasons[0];
      dispatch(store_seasonID(id));
      setSeasonYear(DateTime.fromISO(end).year);
    }
  }, [dispatch, seasons]);

  function pickSeasonHandler({ target }) {
    dispatch(store_seasonID(parseInt(target.value)));
    let year = target.options[target.selectedIndex].dataset.year;
    setSeasonYear(year);
  }

  const seasonOptions = seasons.map(({ id, end }) => {
    const year = DateTime.fromISO(end).year;
    return (
      <option value={id} key={id} data-year={year}>
        {year}
      </option>
    );
  });

  return (
    <BackgroundContainer categoryName={name}>
      <section>
        <SeasonArea>
          <p>{name}</p>
          {seasons.length > 0 && (
            <select onChange={pickSeasonHandler}>{seasonOptions}</select>
          )}
        </SeasonArea>
        <SeasonAreaNav>
          {tabsJSX('Races', 'Standings', 'primary', seasonYear)}
        </SeasonAreaNav>
      </section>
    </BackgroundContainer>
  );
};

export default CategoryDetailsHeader;
