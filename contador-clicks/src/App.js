//Importaaciones para poder tener accesos a los compontentes de la aplicación
import React from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import campuslandsLogo from './imagenes/campuslands-logo.png';
 //import {useState} from 'react'; //Paquetes para los hubs 

//Componente principal de la aplicación la cual se maneja el evento de click en el botón
class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      numClics: 0 
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
   
  }
//Función que maneja el evento de click en el botón
  manejarClic() {
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
    
  }
//Reinicia el contador
  reiniciarContador() {
    this.setState({ numClics: 0 });
  }
  //Renderiza el componente App
  render() {
  return (
    <div className='App'>
       <div className='campuslands-logo-contenedor'>
         <img 
         className='campuslands-logo'
         src={campuslandsLogo}
           alt='CampusLands' />
         </div>
         <div className='contenedor-principal'>
          <Contador numClics={this.state.numClics} />
          <Boton 
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={this.manejarClic} />
          <Boton 
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={this.reiniciarContador} />
            
        </div>
      </div>
    );
    
  }
}

//Exporta el componente App
export default App;
