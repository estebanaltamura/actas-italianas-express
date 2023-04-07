import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import './App.css';

function App() {

  const whatsappIcon = useRef()

  const mostrarIconoWhatsapp = ()=>{
    const scrollPercent = window.scrollY/(document.documentElement.clientHeight)

    console.log(scrollPercent)
    scrollPercent > 0.70 && whatsappIcon.current.classList.replace("hidden", "whatsappLink")
  }

  useEffect(() => {
      window.addEventListener('scroll', mostrarIconoWhatsapp);
    return () => {
      window.removeEventListener('scroll', mostrarIconoWhatsapp);
    };
  }, []);


  return (
    <div className="App">
      <Header />
      <Link to="https://wa.me/+5491127704684?text=Hola!%20Estoy%20interesado%20en%20el%20servicio,%20por%20favor%20contactarse%20a%20la%20brevedad."><img ref={whatsappIcon} className="hidden" src="https://i.postimg.cc/sgz0nSHy/icons8-whatsapp-96.png"/></Link>
      
      {
      window.innerWidth < 768 ? 
        <img className="portada"  src="https://i.postimg.cc/XY4Hf5Bx/portadamobile4.jpg" />
                              :
        <img className="portada"  src="https://i.postimg.cc/wvjpTvpT/portadadesktop2.jpg" />                      
      }
          
      <div className="homeContainer" >
        <div className="blockContainer">

          <h1 className="titulo">ACTAS ITALIANAS EXPRESS</h1>
          <h2 className="subTitulo">ELEGI VIVIR MEJOR</h2>
          <p className="parrafo1">Actas italianas express surgió de la necesidad de solucionar el problema que tienen todos los descendientes de italianos a la hora de pedir actas desde Argentina</p>
          <p className="parrafo2">Las comunas italianas son muy reticentes a responder pedidos desde el exterior ya que están saturadas y priorizan las gestiones realizadas en la propia Italia</p>
          <h3 className="gancho1">EN ACTAS ITALIANAS EXPRESS NOS COMPROMETEMOS A ENCONTRAR TU ACTA EN MENOS DE 30 DIAS O TE DEVOLVEMOS LO QUE PAGASTE</h3>
          <p className="parrafo3"><b>Nuestra red de operadores en Italia logran en pocos días encontrar el acta, lo cual desde Argentina suele ser un trabajo de meses </b>y que en muchísimos casos la comuna no responde ni el pedido original ni a los reclamos subsecuentes</p>
          
          
          <h3 className="ctaFormulario1">Pedí el acta de nacimiento de tu AVO</h3>
          <p className="ctaFormSubTitulo1">(AVO es el antepasado italiano que migro a la argentina)</p>
          <h3 className="ctaFormulario2">Déjenos sus datos y lo contactaremos en menos de 24 horas</h3>
          <Form />
          <div className="lineaDivisoria1"></div>
          <p className="parrafo4">Luego de tener el acta de nacimiento de tu AVO tenés que solicitar en Argentina el certificado de no naturalización</p>
          <p className="parrafo5">El certificado de no naturalización demuestra que el AVO no renunció a su ciudadanía italiana</p>
          <p className="parrafo6">Teniendo el acta de nacimiento italiana y el certificado de no naturalizacion indicando que tu avo no renunció a su ciudadanía italiana eso demuestra que <b>TENES DERECHO A SER CIUDADANO/A ITALIANO</b></p>
          <div className="lineaDivisoria2"></div>
          <p className="parrafo7">HAY DIFERENTES FORMAS DE CONSEGUIR LA CIUDADANIA ITALIANA, PERO TODAS TIENEN ALGO EN COMUN: SE NECESITA LA INFORMACION DE TU ANTEPASADO QUE MIGRO A ARGENTINA QUE NOS DA EL DERECHO A SER CIUDADANO/A ITALIANO/A</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
