import React, {Componet} from "react";
import peliculasCard from "../PeliculasCard/PeliculasCard";
import seriesCard from "../SeriesCard/SeriesCard";
//import {link} from 'react-router-dom'


let apiKey ='6e9de608b8eb72c41459072aa8da9928'


class PedidoPyS extends Component {
  constructor () {
    super()
    this.state = {
      peliculas:[],
      series: [],
    }
  }
  componentDidMount(){
    
    //Peliculas

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(res => res.json())
    .then (data => this.setState({
      peliculas: data.results
    }))
    .catch(e=> console.log(e))

    //Series

    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(res => res.json())
    .then (data => this.setState({
      series: data.results
    }))
    .catch(e=> console.log(e))
 
  }


  render () {
    console.log(this.state.peliculas)
    console.log(this.state.series);
    return (
      <>
       {/*<div>
                {this.state.datos === ""?
                <h3>Cargando...</h3> :
                <h3>{this.state.peliculas}</h3>}
        </div>*/}
      <div>
         <h2>Peliculas Populares</h2> 
         <link to='' ></link>
         </div>
         <section className="seccion-pelis">
        {this.state.peliculas.map((peli, idx)=> <peliculasCard key={peli.title + idx} datosPeli={pelicula}/>)}
         </section>

         <div>
         <h2>Series Populares</h2> 
         <link to='' ></link>
         </div>
         <section className="seccion-series">
          {this.state.series.map((serie, idx) => <seriesCard key={serie.title + idx} datosSerie={serie}/>)}
         </section>
      </>

    )
  }
}
