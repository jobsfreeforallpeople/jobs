import './App.css';

import map from './assets/maps.png'


function App() {
  return (
    <div className="App">
      <div className='card'>
        <h1 className='title'>Te estamos esperando</h1>
        <hr className='rounded'/>
        <h3 className='text1'>Hola, Valentina Garay. Asistí a nuestra entrevista para almozar con alguien que te considera muy especial en su vida nde.</h3>
        <h2 className='text1'> ¿Donde? </h2>
        <img className='map' src={map} alt='mapa'></img>
        <h2 className='text1'> ¿Cuando? </h2>
        <h3 className='text1'>Mañana 31/7 - Tipo 11 am.</h3>
        <h3 className='text1'>-Tu presencia y una coquita-</h3>
        <hr className='rounded'/>
        <a className='wpp_button' href="https://api.whatsapp.com/send?phone=5493764392192" target="blank" >Confirmar asistencia</a> 
        <h2 className='text1'> ¡Te esperamos! </h2>

      </div>
    </div>
  );
}

export default App;
