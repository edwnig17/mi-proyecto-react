//Importaaciones para poder tener accesos a los compontentes de la aplicación y los estilos 
import './App.css';
import Testimonios from './componentes/Testimonio.js';

//Creacion de componente principal de la pagina , desde aquí podremos acoplar todo a nuestros requetimientos
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre .......</h1>
     <Testimonios 
     nombre='Valentina Sanchez'
     pais='Colombia'
     imagen='emma'
     cargo='Ingeniera de sofware'
     empresa='Spotify'
     testimonios='Siempre he tenido problemas para aprender  JavaScript , cuando queria aprenderlo sólo no podia y pasaab noches y noches intenado ahcerlo, pero sé que lo lograré con mucha disciplica.'
     />
  
     <Testimonios
     nombre='Luna '
     pais='Mexico'
     imagen='valentina'
     cargo='Desarrolladora front-end'
     empresa='CampusLands'
     testimonios='Simempre me ha gustado crear paginas de alto nivel con una presencia de código'
    />
    <Testimonios
    nombre='Juanito'
    pais='Venezuela'
    imagen='juan'
    cargo='Desarrolador front-end'
    empresa='CampusLands'
    testimonios='Simempre me ha gustado crear paginas de alto nivel con una presencia de código y demostrar lo que saber hacer sin nigún obstaculo '
    />
     </div>
    </div>
  );
}
 //Exportacion de la clase App
export default App;
