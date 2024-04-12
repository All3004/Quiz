import React, { useState } from 'react';

function App() {
  const [likes, setLikes] = useState(0);
  const [name, setName] = useState('No definido');
  const [resultado, setResultado] = useState(0);
  const [primerValor, setPrimerValor] = useState('');
  const [segundoValor, setSegundoValor] = useState('');

  const megusta = () => {
    setLikes(likes + 1);
  };

  const nomegusta = () => {
    setLikes(likes - 1);
  };

  const estado = (event) => {
    setName(event.target.value);
  };

  const suma = () => {
    setResultado(parseFloat(primerValor) + parseFloat(segundoValor));
  };

  const resta = () => {
    setResultado(parseFloat(primerValor) - parseFloat(segundoValor));
  };

  const handleReset = () => {
    setResultado(0);
    setPrimerValor('');
    setSegundoValor('');
  };

  return (
    <div>
      <h1>Cantidad de likes: {likes}</h1>
      <button onClick={megusta}>Me gusta</button>
      <button onClick={nomegusta}>No me gusta</button>

      <h2 className='title2'>Su nombre es: {name}</h2>
      <input onChange={estado} type='text' placeholder='Digite su nombre' />

      <h1>Calculadora</h1>
      <input
        type="number"
        value={primerValor}
        onChange={(e) => setPrimerValor(e.target.value)}
        placeholder="Primer valor"
      />
      <input
        type="number"
        value={segundoValor}
        onChange={(e) => setSegundoValor(e.target.value)}
        placeholder="Segundo valor"
      />
      <button onClick={suma}>Sumar</button>
      <button onClick={resta}>Restar</button>
      <button onClick={handleReset}>Reiniciar</button>
      <p>El resultado es: {resultado}</p>
    </div>
  );
}

export default App;
