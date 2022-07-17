import styled from 'styled-components';
import Header from '../components/header';

const MainLayer = ({ children }) => (
  <>
    <Header />
    <Wrapper>{children}</Wrapper>
  </>
);

const Wrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
`;

export default MainLayer;
