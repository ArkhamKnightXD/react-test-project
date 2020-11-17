//El app.js siempre viene con codigo inicial cuando creamos un proyecto, 
//asi que lo que haremos normalmente es borrar todo y empezar a trabajar aqui
//App.js funcionara como nuestro componente principal, asi que podemos crear distintos componentes
//Y llamarlos aqui en este componente principal para asi modularizar nuestro codigo

//App.js es un componente, un componente es un archivo que tiene toda la logica, html e incluso el estilo
//Entonces un componente es algo en lo que tu puedes tener el html, los estilos y la logica de javascript

//Imports necesario para crear un componente
import React from 'react';
//Aqui estoy importando otro componente para ser utilizado en este componente
import SayHello from './SayHello';
import Tweet from './Tweet';

//Un componente es basicamente una funcion de javascript que dentro tendra un return y aqui podremos retornar
//Ya sea codigo javascript, html y hasta codigo css para estar claro componente == funcion
function App(){

  return (
    
    //Luego de importado el componente llamarlo mediante el uso de tags y el nombre del componente
    //En este caso estamos llamando a sayhello
    <div>
      <h1>This is the app component</h1>
      <Tweet />
      <br></br>
      <SayHello/>
    </div>
  );
}


//Esto quiere decir que exportaremos el componente App para poder utilizarlo en cualquier otro lugar
export default App;