// ** React import
import { useEffect, useContext } from 'react';

// ** React Router DOM import
import { Routes, Route } from 'react-router-dom';

// ** Contexts import
import { IsLoadingContext } from './contexts/IsLoadingContextProvider';

// ** Components import
import { Header } from './components/Header/Header';
import { Home } from './pages/home/Home';
import { GraciasPorSuConsulta } from './pages/graciasPorSuConsulta/GraciasPorSuConsulta';
import { ChatearConUnOperador } from './pages/chatearConUnOperador/ChatearConUnOperador';
import { Footer } from './components/Footer/Footer';

// ** Styles import
import './global.css';

const App: React.FC = () => {
  const { isLoading } = useContext(IsLoadingContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/graciasPorSuConsulta' element={<GraciasPorSuConsulta />} />
        <Route path='/chatearConUnOperador' element={<ChatearConUnOperador />} />
      </Routes>
      {!isLoading && <Footer />}
    </>
  );
};

export default App;
