import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { IsLoadingContext } from "./contexts/IsLoadingContextProvider";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/home/Home";
import { GraciasPorSuConsulta } from "./pages/GraciasPorSuConsulta/GraciasPorSuConsulta";
import { ChatearConUnOperador } from "./pages/chatearConUnOperador/ChatearConUnOperador";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  const { isLoading } = useContext(IsLoadingContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} /> 
        <Route
          path="/graciasPorSuConsulta"
          element={<GraciasPorSuConsulta />}
        />
        <Route
          path="/chatearConUnOperador"
          element={<ChatearConUnOperador />}
        />
      </Routes>
      {!isLoading && <Footer />}
    </>
  );
}

export default App;
