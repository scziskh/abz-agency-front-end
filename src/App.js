import styled from 'styled-components';
import Header from './components/header';
import MainSection from './components/main-section';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <MainSection />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
`;

export default App;
