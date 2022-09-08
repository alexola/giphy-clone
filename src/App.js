import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import appLogo from './app-logo.png'


import { Link, Route } from "wouter";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <img className="logo" src={appLogo} alt="logo app"/>
        <Link to='/gif/panda'>Gifs de pandas</Link>
        <Link to='/gif/funny cat'>Gifs de gatos</Link>
        <Link to='/gif/southpark'>Gifs de southpark</Link>
        <Link to='/gif/matrix'>Gifs de matrix</Link>
        <Route 
          component={ListOfGifs}
          path="/gif/:keyword"  />
      </section>
    </div>
  )
}


