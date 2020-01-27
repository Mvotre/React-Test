import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Pokemain from './container/pokemon_container'
import { Route } from 'react-router-dom';
import PokeDetails from './components/pokemon_details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Pokemain} />
        <Route path="/details" component={PokeDetails} />
      </div>
    </BrowserRouter>
  );
}

export default App;
