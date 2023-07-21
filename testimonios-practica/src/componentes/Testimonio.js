//Importamos los componentes para la aplicación y la pagina de estilos
import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

//Creamos una clase para crear los componentes de la pagina y lo que contendrá
function Testimonios(props){
  return(
  <div className='contenedor-testimonio' >
    <img  
    className='imagen-testimonio'
    //plantillas literales
    src={require(`../imagenes/testimonio-${props.imagen}.png`)}
    alt ='Foto de Emma '/>
    <div className='contenedor-texto-testimonio'>
    <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
    <p className='cargo-testimonio'>{props.cargo}  en {props.empresa}</p>
    <p className='texto-testimonio'>"{props.testimonios}"</p>
  </div>
  </div>
  );
}
 
//Exportamos la clase Testimonios
export default Testimonios;