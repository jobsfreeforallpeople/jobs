import './App.css';

import map from './assets/maps.png'


function App() {
  return (
    <div className="App">
      <div className='card'>
        <h1 className='title'>Te estamos buscando</h1>
        <hr className='rounded'/>
        <h3 className='text1'>Si te llamas Valentina Garay, y naciste el 8 de marzo del 2000, entonces esto es para vos.</h3>
        <h3 className='text1'>Mañana 31/7 asistí a nuestra entrevista para almozar con alguien que te considera muy especial en su vida.</h3>
        <h2 className='text1'> ¿Donde? </h2>
        <img className='map' src={map} alt='mapa'></img>
        <h2 className='text1'> ¿Horario? </h2>
        <h3 className='text1'>Tipo 11.</h3>
        <h2 className='text1'> ¿Que necesitas? </h2>
        <h3 className='text1'>Tu presencia y una coquita.</h3>
        <hr className='rounded'/>
        <h2 className='text1'> ¡Te esperamos! </h2>

      </div>
    </div>
  );
}

export default App;
