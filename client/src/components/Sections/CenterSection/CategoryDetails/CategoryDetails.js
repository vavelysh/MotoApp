import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import CategoryDetailsHeader from '../CategoryDetailsHeader/CategoryDetailsHeader';
import GrandPrixList from '../GrandPrixList/GrandPrixList';
import Standings from '../Standings/Standings';
import { useSwitchPair } from '../../../../hooks/useSwitchPair';

const CategoryDetails = () => {
  const { catId } = useParams();
  const [pickedCategory, setPickedCategory] = useState(null);
  const [tab, tabsJSX] = useSwitchPair();
  const categories = useSelector((state) => state.catData.categories);

  useEffect(() => {
    if (categories) {
      const findedCategory = categories.find(
        (cat) => cat.id === parseInt(catId)
      );
      setPickedCategory(findedCategory);
    }
  }, [catId, categories]);

  if (pickedCategory) {
    return (
      <>
        <CategoryDetailsHeader
          pickedCategory={pickedCategory}
          tabsJSX={tabsJSX}
        />
        {tab ? <GrandPrixList /> : <Standings />}
      </>
    );
  } else {
    return null;
  }
};

export default CategoryDetails;
