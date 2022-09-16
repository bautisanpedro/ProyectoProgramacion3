import React from "react";

/* screens */
import Home from "./screens/Home/Home"
import Series from "./screens/Series/Series"
import Peliculas from "./screens/Peliculas/Peliculas"
import Favoritos from "./screens/Favoritos/Favoritos"
import NotFound from "./screens/NotFound/NotFound"
import DetallePelicula from "./screens/DetallePelicula/DetallePelicula"
import DetalleSerie from "./screens/DetalleSerie/DetalleSerie"

/* componentes */

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Switch } from "react-router-dom"

function App() {
  const nav = ['Inicio', 'Peliculas', 'Series', 'Favoritos']

  return (
    <div>
      <Header opciones={nav} nombre={'Ramiro'} />

      <Switch>
        <Route exact path = "/" component={Home} />
        <Route path = "/Favoritos" component={Favoritos} />
        <Route path = "/Series" component={Series} />
        <Route path = "/Peliculas" component={Peliculas} />
        <Route path= "/detallePelicula/:id" component={DetallePelicula} />
        <Route path="/detalleSerie/:id" component={DetalleSerie}/>
        <Route path='' component={NotFound} />
      </Switch>  
      
      <Footer />
    </div>
  );
}

export default App;