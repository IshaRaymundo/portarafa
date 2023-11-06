import './App.css';
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


// import CondicionalAtmosferica from './Pages-Dash/CondicionalAtmosferica';
// import Login from './componentes/Login';
// import CocktailDatabase from './paginas/CocktailDatabase';
// import CocktailRandom from './paginas/CocktailRandom';
// import Tours from './paginas/Tours';
import ToursApi from './paginas/ToursApi';

function App() {
  return (
    <>
      {/* <CondicionalAtmosferica/> */}
      {/* <CocktailRandom/> */}
      <ToursApi/>
      {/* <CocktailDatabase /> */}
      {/* <Login/> */}
    </>
  );
}

export default App;
