import styled from 'styled-components';

const RootContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 101vh;
`;

const Wrapper = styled.section`
  padding: 10px;
  flex-basis: 1500px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background};
  display: grid;
  grid-template-columns: 1fr;
	grid-gap: 25px 0;
  @media (min-width: 1000px) {
    grid-template-columns: 1fr auto 2fr auto 2fr;
		grid-auto-rows: 1fr;
		grid-gap: 0;
	}
`;

const Layout = ({ children }) => {
  return (
    <RootContainer>
      <Wrapper>{children}</Wrapper>
    </RootContainer>
  );
};

export default Layout;
