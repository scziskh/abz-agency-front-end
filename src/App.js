import GetRequest from './components/get-request';
import MainSection from './components/main-section';
import PostRequest from './components/post-request';
import MainLayer from './layers/mainLayer';

const App = () => {
  return (
    <MainLayer>
      <MainSection />
      <GetRequest />
      <PostRequest />
    </MainLayer>
  );
};

export default App;
