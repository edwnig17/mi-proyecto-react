//Importamos los componentes para la aplicación y la pagina de estilos
import React from 'react';
import '../hojas-de-estilo/Boton.css';


// usamos la class Boton para renderizar el botón  y llamamos a las funciones que se usaran para el botón
class Boton extends React.Component {
  render() {
    return (
      <button
      //Operador ternario le estamos diciend que si es boton click agarre la clase click y si no agarre la clase de reiniciar
        className={this.props.esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
          //Nuestro EventListener para cuando escuche nuestro evento 
        onClick={this.props.manejarClic}>
        {this.props.texto}
      </button>
    );
  }
}
//Sólo se puede exportar un elemento del archivo
export default Boton;