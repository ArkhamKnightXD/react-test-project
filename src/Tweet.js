import React from "react";
//Para hacer uso de hojas de estilos tambien debemos de importarlas
//Por alguna razon falla quedare aqui en el tutorial
import "./App.css";

//Este componente se encargara de verse y funcionar como un tweet
//Mediante classname asociamos todo lo que esta dentro de div con la clase tweet de app.css
function Tweet(){
    return(
        <div className="tweet">
            <h3>Name</h3>
            <p>This is a random tweet</p>
            <h3>Number of likes</h3>
        </div>
    );
}


export default Tweet;