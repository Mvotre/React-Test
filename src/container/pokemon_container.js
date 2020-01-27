import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Logo from '../assets/images/logo.svg';
import '../container/pokemon_container.scss'
import Pokemon from '../components/pokemon';
import * as actionTypes from '../store/constants/action-types';

const Pokemain = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [pokemonList, setPokemonList] = useState('');
  const [filteredPokes, setFilteredPokes] = useState('');
  const [filterResults, setFilterResults] = useState('');

  useEffect(() => {
    axios.get(`https://api.pokemontcg.io/v1/cards?supertype=pokemon`)

    .then(res => {
      let pokemons = res.data.cards;
      setPokemonList(pokemons);
    })
  }, []);

  const saveId = (val) => {
    dispatch({type: actionTypes.CLICK_UPDATE_VALUE, pokeId: val})
  }

  const handleChange = (event) => {
    let inputField = event.target.value
    setFilteredPokes(inputField)

    let filterResults = pokemonList.filter( (el) => {
      let z = event.target.value;
      let x = z.toString()
      let capitalized = x.charAt(0).toUpperCase() + x.slice(1);

      if(el.name.includes(capitalized) && capitalized !== ""){
        return el;
      } 
    })

    setFilterResults(filterResults);
  }
  
  // Não fiz um loop para mostrar mais de um estilo. Todas as cartas de Pokemon que eu vi só possuiam um estilo. 
  const renderPokemon = (el) => {
    return <Pokemon 
    key={el.id} 
    abreNova={
      () => {
        console.log(el.id)
        saveId(el.id)
        history.push('/details')
      }
    }  
    imageUri={el.imageUrl} 
    nome={el.name} 
    id={el.id} 
    tipo={el.types} /> 
  }

  let showPokemon;
  let mensagemErro = ''

  if(filteredPokes.length !== 0) {    
    let y = [...filterResults]
    if(y.length === 0) {
      mensagemErro = 'Nenhum Pokemon encontrado';
      showPokemon = y.map( renderPokemon );
    }
    showPokemon = y.map( renderPokemon );
  } else {
    let z = [...pokemonList]
    showPokemon = z.map( renderPokemon )
  }

  return (
    <div className="pk-container">
      <div className="pk-MainHd"> 
        <img src={Logo} alt="Pokemon Logo" /> 
      </div>
      <div className="pk-search">
        <p className="pk-search__erro"> {mensagemErro} </p>
        <input className="pk-search__ipt" placeholder="Filtrar por nome" onChange={handleChange} /> 
      </div>
      <div className="pk-listContainer">
        {showPokemon}
      </div>
    </div>
  );
}


export default Pokemain;