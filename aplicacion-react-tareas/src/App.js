import './App.css';
import campuslandsLogo from './imagenes/campuslands-logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='campuslands-logo-contenedor'>
        <img 
          src={campuslandsLogo} 
          className='campuslands-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;