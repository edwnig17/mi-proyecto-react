//Importamos los componentes para la aplicación y la pagina de estilos
import React from 'react';
import '../hojas-de-estilo/Contador.css';

//Creamos un componente de tipo contador para poderle darle la función de contador
class Contador extends React.Component {
  render() {
    return (
      <div className='contador'>
        {this.props.numClics}
      </div>
    );  
  }
}
//Exportamos el componente Contador
export default Contador;    