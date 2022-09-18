import React from "react";

/* screens */
import Home from "./screens/Home/Home"
import TodasPopulares from "./components/TodasPeliculas/TodasPopulares"
import TodasCartelera from "./components/TodasSeries/TodasCartelera"
import Favoritos from "./screens/Favoritos/Favoritos"
import NotFound from "./screens/NotFound/NotFound"
import DetallePelicula from "./screens/DetallePelicula/DetallePelicula"
import DetalleSerie from "./screens/DetalleSerie/DetalleSerie"

/* componentes */

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Switch } from "react-router-dom"

function App() {


  return (
    <div>
      <Header/>

      <Switch>
        <Route exact path = "/" component={Home} />
        <Route path = "/Favoritos" component={Favoritos} />
        <Route path = "/TodasCartelera" component={TodasCartelera} />
        <Route path = "/TodasPopulares" component={TodasPopulares} />
        <Route path= "/detallePelicula/:id" component={DetallePelicula} />
        <Route path="/detalleSerie/:id" component={DetalleSerie}/>
        <Route path='' component={NotFound} />
      </Switch>  
      
      <Footer />
    </div>
  );
}

export default App;