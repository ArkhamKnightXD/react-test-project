import React from "react";
//Para hacer uso de hojas de estilos tambien debemos de importarlas
import "./App.css";

//Este componente se encargara de verse y funcionar como un tweet
//Mediante classname asociamos todo lo que esta dentro de div con la clase tweet de app.css
//gracias a que cree un componente puedo reutilizar todo esto las veces que quiera

//definimos los props aqui tambien los props podrian mandarse directamente mediante deconstructing
//ejemplo function Tweet(name, tweet, like), pero yo prefiero la forma basica
function Tweet(props){

    //y para llamarlo solo usamos props."nombre de la propiedad que hayamos mandado"
    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>{props.tweet}</p>
            <h3>{props.like}</h3>
        </div>
    );
}


export default Tweet;