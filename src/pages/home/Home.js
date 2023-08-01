import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { IsLoadingContext } from "../../contexts/IsLoadingContextProvider";
import { useSyntheticMediaQueries } from "../../hooks/useSyntheticMediaQueries";
import { Form } from "../../components/Form/Form";
import { IoChatbubblesOutline } from "react-icons/io5";
import Lottie from 'react-lottie-player'
import spinner from '../../assets/spinnerJson.json'
import "./Home.css";


export const Home = () => {
  const [currentScreenWidth, setCurrentScreenWidth] = useState(window.innerWidth);
  const { isLoading, setIsLoading } = useContext(IsLoadingContext);
  const { getCurrentAndLastWidth, wasTriggeredMediaQuery } = useSyntheticMediaQueries()

  const loadCoverImageHandler = (event) => {
    event.target.classList.value.includes("portada") && setIsLoading(false);
  }; 

   useEffect(() => {    
    window.scrollTo({
      top: 0,
      left: 0
    });

    const changeScreenWidthHandler = () => {
      setCurrentScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeScreenWidthHandler);

    return () => window.removeEventListener("resize", changeScreenWidthHandler);
  }, []);

  useEffect(()=>{
    const [currentWidth, lastWidth] = getCurrentAndLastWidth(currentScreenWidth)
    wasTriggeredMediaQuery(currentWidth, lastWidth) && setIsLoading(true)
  },[currentScreenWidth])

  return (  
      <div className="homeContainer" onLoad={loadCoverImageHandler}>
        <Lottie 
          animationData={spinner}
          style= {{"width": "160px", "height": "160px"}}
          className={isLoading === true ? "spinnerHome" : "hidden"}
          play
          loop        
        />        

        <div className={isLoading === true ? "hidden" : ""}>
          {currentScreenWidth < 768 ? (
            <img
              className="portada"
              src="https://i.postimg.cc/XY4Hf5Bx/portadamobile4.jpg"
            />
          ) : (
            <img
              className="portada"
              src="https://i.postimg.cc/wvjpTvpT/portadadesktop2.jpg"
            />
          )}
          <div className="blocksHomeGrid">
            <h1 className="titulo">ACTAS ITALIANAS EXPRESS</h1>
            <h2 className="subTitulo">ELEGI VIVIR MEJOR</h2>
            <p className="parrafo1">
              Actas italianas express surgió de la necesidad de solucionar el
              problema que tienen todos los descendientes de italianos a la hora
              de pedir actas desde Argentina.
            </p>
            <p className="parrafo2">
              Las comunas italianas son muy reticentes a responder pedidos desde
              el exterior ya que están saturadas y priorizan las gestiones
              realizadas en la propia Italia.
            </p>
            <h3 className="gancho1">
              EN ACTAS ITALIANAS EXPRESS HACEMOS HASTA LO IMPOSIBLE PARA CONSEGUIR
              TU ACTA EN POCOS DIAS
            </h3>
            <p className="parrafo3">
              <b>
                Nuestra red de operadores en Italia logran en pocos días
                encontrar el acta, lo cual desde Argentina suele ser un trabajo
                de meses{" "}
              </b>
              y que en muchísimos casos la comuna no responde ni el pedido
              original ni a los reclamos subsecuentes.
            </p>

            <h3 className="ctaFormulario1">
              Pedí el acta de nacimiento de tu AVO
            </h3>
            <p className="ctaFormSubTitulo1">
              (AVO es el antepasado italiano que migro a la argentina)
            </p>
            <h3 className="ctaFormulario2">
              Déjenos sus datos y lo contactaremos en menos de 24 horas
            </h3>
            <Form />
            <div className="lineaDivisoria1"></div>
            <p className="parrafo4">
              Luego de tener el acta de nacimiento de tu AVO tenés que solicitar
              en Argentina el certificado de no naturalización. El certificado de no naturalización demuestra que el AVO no
              renunció a su ciudadanía italiana.
            </p>           
            <p className="parrafo5">
              Teniendo el acta de nacimiento italiana y el certificado de no
              naturalizacion indicando que tu avo no renunció a su ciudadanía
              italiana eso demuestra que{" "}
              <b>TENES DERECHO A SER CIUDADANO/A ITALIANO</b>
            </p>
            <div className="lineaDivisoria2"></div>
            <p className="parrafo7">
              HAY DIFERENTES FORMAS DE CONSEGUIR LA CIUDADANIA ITALIANA, PERO
              TODAS TIENEN ALGO EN COMUN: SE NECESITA LA INFORMACION DE TU
              ANTEPASADO QUE MIGRO A ARGENTINA QUE NOS DA EL DERECHO A SER
              CIUDADANO/A ITALIANO/A
            </p>
          </div>

          <Link to="/chatearConUnOperador" className="whatsappLink">
            <IoChatbubblesOutline className="chatIcon" />
            HABLEMOS
          </Link>
        </div>
      </div>
    
  );
};

