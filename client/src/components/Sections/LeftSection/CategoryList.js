import { CategoryTitle, ListContainer } from './styles';
import CategoryItem from './CategoryItem';
import { useQuery } from 'react-query';
import { getCategories } from '../../../queries/queries';
import { useHistory } from 'react-router-dom';
import Error from '../../NotifyErrors/Error';
import { store_categories } from '../../../store/application-data/actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StyledSkeleton } from '../../UI/StyledSkeleton';

const CategoryList = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { data, error, isLoading } = useQuery('getCategories', getCategories, {
    retry: 0,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (data) {
      const { name, id } = data[0];
      dispatch(store_categories(data));
      history.push(`/category/${name.replace(' ', '-').toLowerCase()}/${id}`);
    }
  }, [dispatch, data, history]);

  let componentResult;
  if (error) {
    if (error.message === 'Network Error') {
      history.push('/net-error');
    }
    componentResult = <Error type="no-results" />;
  }

  if (isLoading)
    componentResult = (
      <>
        <StyledSkeleton height={30}/>
        <StyledSkeleton height={30}/>
        <StyledSkeleton height={30}/>
        <StyledSkeleton height={30}/>
      </>
    );

  if (data) {
    componentResult = data.map(({ id, name, imageUrl }) => {
      return <CategoryItem key={id} name={name} id={id} imageUrl={imageUrl} />;
    });
  }

  return (
    <section>
      <CategoryTitle>
        <h1>Categories</h1>
      </CategoryTitle>
      <ListContainer>{componentResult}</ListContainer>
    </section>
  );
};

export default CategoryList;
