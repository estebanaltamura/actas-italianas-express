import { Form } from './components/Form/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="homeContainer">
        <div className="blockContainer">
          <img className="portada" src="https://i.postimg.cc/k4NgbjjX/actamobileportada.jpg" />

          <h1 className="titulo">ACTAS ITALIANAS EXPRESS</h1>
          <h2 className="subTitulo">ELEGI VIVIR MEJOR</h2>
          <p className="parrafo1">Actas italianas express surgio de la necesidad de solucionar el problema que tienen todos los descendientes de italianos a la hora de pedir actas desde argentina</p>
          <p className="parrafo2">Las comunas italianas son muy reticentes a responder pedidos desde el exterior ya que estan saturadas y priorizan las gestiones realizadas en la propia Italia</p>
          <p className="parrafo3"><b>Nuestra red de operadores en Italia logran en pocos dias encontrar el acta, lo cual desde Argentina suele ser un trabajo de meses </b>y que en muchisimos casos la comuna no responde ni el pedido original ni a los reclamos subsecuentes</p>
          
          <h3 className="gancho1">EN ACTAS ITALIANAS EXPRESS NOS COMPROMETEMOS A ENCONTRAR TU ACTA EN MENOS DE 30 DIAS O TE DEVOLVEMOS LO QUE PAGASTE</h3>
          
          <h3 className="ctaFormulario1">Pedi el acta de nacimiento de tu AVO</h3>
          <p className="ctaFormSubTitulo1">(AVO es el antepasado italiano que migro a la argentina)</p>
          <h3 className="ctaFormulario2">Dejenos sus datos y lo contactaremos en menos de 24 horas</h3>
          <Form />

          <p className="parrafo4">Luego de tener el acta de nacimiento de tu AVO tenes que solicitar en Argentina el certificado de no naturalizacion</p>
          <p className="parrafo5">El certificado de no naturalizacion demuestra que el AVO no renuncio a su ciudadania italiana</p>
          <p className="parrafo6">Teniendo el acta de nacimiento italiana y el certificado de no naturalizacion indicando que tu avo no renuncio a su ciudadania italiana eso demuestra que <b>TENES DERECHO A SER CIUDADANO/A ITALIANO</b></p>
          <p className="parrafo7">Hay diferentes formas de conseguir la ciudadania italiana, pero todas tienen en comun el necesitar toda la documentacion sobre el antepasado que nos da el derecho a ser ciudadano/a</p>

        </div>
      </div>
    </div>
  );
}

export default App;
