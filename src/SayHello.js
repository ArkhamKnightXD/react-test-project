import React from 'react';

function SayHello(){

    const sayHello = () => {

        console.log("hello");
      }

    return (
        //Esto parece html, pero en realidad es codigo javascript (JSX) que luego es transformado a html
    //Para agregar codigo JS a los elementos html debo abrir {} y dentro puedo poner el codigo JS
    // a la hora de trabajar con funciones en JS no la llamamos con los ()
        <div>
            <h3>This is the SayHello component</h3>
            <button onClick={sayHello}>hello</button>
        </div>
    );
}

export default SayHello;