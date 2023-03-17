import React from 'react';
import './App.css';
import VendingMachine from './VendingMachine';
import { BrowserRouter, Route } from 'react-router-dom';
import Soda from "./Soda";
import Chips from "./Chips";
import CandyBar from "./CandyBar";
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <NavBar />
        <Route exact path='/'>
          <VendingMachine />
        </Route>
        <Route exact path='/soda'>
          <Soda />
        </Route>
        <Route exact path='/chips'>
          <Chips />
        </Route>
        <Route exact path='/candybar'>
          <CandyBar />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
