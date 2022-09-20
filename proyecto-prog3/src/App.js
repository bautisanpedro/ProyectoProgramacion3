import React from "react";

/* screens */
import Home from "./screens/Home/Home"
import TodasPopulares from "./components/TodasPeliculas/TodasPopulares"
import Favoritos from "./screens/Favoritos/Favoritos"
import NotFound from "./screens/NotFound/NotFound"
import DetallePelicula from "./screens/DetallePelicula/DetallePelicula"


/* componentes */

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Switch } from "react-router-dom"

function App() {


  return ( // el componente Route recibe los atributos path y component
    <div>
      <Header/>

      <Switch>
        <Route exact path = "/" component={Home} />  
        <Route path = "/Favoritos" component={Favoritos} />
        <Route path = "/TodasPopulares" component={TodasPopulares} />
        <Route path= "/detallePelicula/:id" component={DetallePelicula} />
        <Route path='' component={NotFound} />
      </Switch>  
      
      <Footer />
    </div>
  );
}

export default App;