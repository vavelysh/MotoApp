import { StyledNavLink } from './styles';

const CategoryItem = ({ name, id, imageUrl }) => {
  return (
    <StyledNavLink
      to={`/category/${name.replace(' ', '-').toLowerCase()}/${id}`}
    >
      <img src={imageUrl} alt="Category Item" />
      <p>{name}</p>
    </StyledNavLink>
  );
};

export default CategoryItem;
