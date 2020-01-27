import React from 'react'
import "./pokemon.scss"

function Pokemon(props) {
  return (
  <div className="pk-singleBox" onClick={ props.abreNova } >
    <img src={props.imageUri} alt="Pokemon"/>
    <p data-testid="nome"><span>Nome:</span> {props.nome}</p>
    <p> <span> ID: </span> {props.id} </p>
    <p> <span> Tipo: </span> {props.tipo} </p>
  </div>
  );
}

export default Pokemon;