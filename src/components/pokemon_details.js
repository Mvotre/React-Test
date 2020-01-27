import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Logo from '../assets/images/logo.svg';
import Pokeball from '../assets/images/pokeball.png';
import './pokemon_details.scss'

const PokeDetails = () => {
  const history = useHistory();
  const [pokemon, setPokemon] = useState('');
  const id = useSelector(state => state.pokeId);

  useEffect(() => {
    axios.get(`https://api.pokemontcg.io/v1/cards/${id}`)

    .then(res => {
      let pokemonData = res.data.card;
      setPokemon(pokemonData);
    })
  }, [id])

  const retorno = () => {
    history.push('/')
  }

  // Definindo as variáveis a serem exibidas
  let attacks = "";
  let resistances = "";
  let weaknesses = "";

  if(pokemon.attacks){
    let z = pokemon.attacks;
    let y = pokemon.resistances;
    let x = pokemon.weaknesses;
    
    attacks = z.map( (att) => {
      let y = att.cost;
      let t = y.map( (el) => {
        return (
          <span> {el} </span>
        )
      })

        return (
          <div className="pk-detailCardSub pk-detailCardSub--attack">
            <p className="pk-detailCardSub__txt"> <span> Nome: </span> {att.name} </p>
            <p className="pk-detailCardSub__txt"> <span> Dano: </span> {att.damage} </p>
            <p className="pk-detailCardSub__fullTxt"> {att.text}</p>
            <p className="pk-detailCardSub__pills"> {t} </p>
          </div>
        ) 
      }
    )

    if(y){
      resistances = y.map( (res) => {
          return (
            <div className="pk-detailCardSub pk-detailCardSub--resistance">
              <p className="pk-detailCardSub__txt"> <span> Tipo: </span> {res.type} </p>
              <p className="pk-detailCardSub__txt"> {res.value} </p>
            </div>
          ) 
        }
      )
    }

    if(x){
      weaknesses = x.map( (wea) => {
          return (
            <div className="pk-detailCardSub pk-detailCardSub--weaknesses">
              <p className="pk-detailCardSub__txt"> <span> Tipo: </span> {wea.type} </p>
              <p className="pk-detailCardSub__txt"> {wea.value} </p>
            </div>
          ) 
        }
      )
    }
  } 
    
  return (
    <div className="pk-detailContainer">
      <div className="pk-detailHd"> 
        <img className="pk-detailHd__logo" src={Logo} alt="Pokemon Logo" /> 
        <img className="pk-detailHd__ball" src={Pokeball} alt="Pokeball" /> 
      </div>

      <div className="pk-detailCard">
        <div className="pk-detailCard__img">
          <img src={pokemon.imageUrlHiRes} alt="High Res Pokemon"/>
        </div>

        <div className="pk-detailCard__info">
          <p className="pk-detailCard__info__txt"> <span> Nome: </span> {pokemon.name}  </p>
          <p className="pk-detailCard__info__txt"> <span> ID: </span> {pokemon.id}  </p>
          <p className="pk-detailCard__info__txt"> <span> Tipo: </span> {pokemon.types }  </p>
          {attacks}
          {resistances} 
          {weaknesses} 
        </div>
      </div>
      
      <div className="pk-detailButton">
        <button onClick={ () => retorno() }> Voltar </button>
      </div>
    </div>
  );
}



export default PokeDetails;