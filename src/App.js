import Users from './components/users';
import MainSection from './components/main-section';
import RegisterUser from './components/register-user';
import MainLayer from './layers/mainLayer';

const App = () => {
  return (
    <MainLayer>
      <MainSection />
      <Users countSteps={6} startPage={1} />
      <RegisterUser />
    </MainLayer>
  );
};

export default App;
