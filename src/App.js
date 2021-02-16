//El app.js siempre viene con codigo inicial cuando creamos un proyecto, 
//asi que lo que haremos normalmente es borrar todo y empezar a trabajar aqui
//App.js funcionara como nuestro componente principal, asi que podemos crear distintos componentes
//Y llamarlos aqui en este componente principal para asi modularizar nuestro codigo

//App.js es un componente, un componente es un archivo que tiene toda la logica, html e incluso el estilo
//Entonces un componente es algo en lo que tu puedes tener el html, los estilos y la logica de javascript

//Imports necesario para crear un componente, el useState el import necesario para manejar estados
import React, { useState } from 'react';
//Aqui estoy importando otro componente para ser utilizado en este componente
import SayHello from './SayHello';
import Tweet from './Tweet';
import "./App.css"

//Un componente es basicamente una funcion de javascript que dentro tendra un return y aqui podremos retornar
//Ya sea codigo javascript, html y hasta codigo css para estar claro componente es como una funcion
function App(){

    //Los estados (states) son variables que dependiendo del estado de esas variables nuestra app cambiara
    //Esto es lo que hace que la aplicacion pueda ser un spa (single page app) ya que los cambios hechos se mostraran
    //en tiempo real sin tener que recargar la pagina

    //creacion de states, esto es tambien lo que se utiliza para guardar datos obtenidos de un api
    const [red, setRed] = useState(false);
    const [count, setCount] = useState(0);

    //agregando unos fake user para simular que leemos de un api
    const [users, setUsers] = useState([
        {name: "karvin", text: "prueba"},
        {name: "karvin2", text: "prueba2"}
    ]);

    //las funciones de javascript deben ir fuera del return
    const increment = () => {
        setCount(count +1);

        //setear el valor a el valor contrario del actual para que alterne entre colores
        setRed(!red);
    };

  return (
    
    //Luego de importado el componente llamarlo mediante el uso de tags y el nombre del componente
    //En este caso estamos llamando a sayhello
      //Aqui tenemos 4 componentes iguales que si queremos que muestren cosas diferentes debemos de utilizar props
      //los props son propiedades que podemos definir en cada uno de los componentes


    <div className="App">

        {users.map((user) =>
            <Tweet name={user.name} tweet={user.text} like="2"/>
        )}

        <h1 className={red ? "red" : ""}> change my color</h1>
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
      <Tweet name="Kar ED" tweet="esto es un tweet" like="500"/>
      <Tweet name="Aloha" tweet="pruebaqqq" like="5000"/>
      <Tweet name="pepe" tweet="aloha man" like ="415"/>
      <Tweet name="final" tweet="test" like ="444"/>

      <br></br>
      <SayHello/>
    </div>
  );
}


//Esto quiere decir que exportaremos el componente App para poder utilizarlo en cualquier otro lugar
//Agregamos el default para no tener que agregar parentesis a la hora de hacer import
export default App;