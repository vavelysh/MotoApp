import { HeaderSpan, NavigationHeader } from '../styles';

const BasicGpInfo = ({ gpData }) => {
  if (gpData != null) {
    const { circuit, name } = gpData;
    return (
      <NavigationHeader>
        <div>
          <img src={circuit.nation.imageUrl} alt={name} />
        </div>
        <p>{name}</p>
        <HeaderSpan>{circuit.name}</HeaderSpan>
      </NavigationHeader>
    );
  } else {
    return <p>No results</p>;
  }
};

export default BasicGpInfo;
