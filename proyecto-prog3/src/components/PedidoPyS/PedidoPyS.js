import React, { Component } from "react";   //importamos react aclarando que queremos traer el objeto Componente


let apiKey = '6e9de608b8eb72c41459072aa8da9928'


class PedidoPyS extends Component { //lo definimos

  constructor() {  //  metodo constructor -> contiene info del estado inicial y administra props
    super()  // funcion para utilizar las props 
    this.state = {    // definimos el estado inicial  /  state es un objeto literal
      peliculas: [],
      series: [],
    }
  }
  componentDidMount() { // metodo -> lo ejecutamos despues del renderizado del componente en el dom

    //Peliculas

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)  // metodo fetch recibe como parametro el endpoint
      .then(res => res.json())   // parseamos la info
      .then(data => this.setState({  // actualizamos el estado inicial del componente
        peliculas: data.results  //actualizamos el valor de peliculas
      }))
      .catch(e => console.log(e))
      }

 
  render() {  
  
    return (
      <>
        <div>
                {this.state.datos === "" ?
                <h3>Cargando...</h3> : 
                <h3>{this.state.peliculas}</h3>}
        </div>
        
       
        <section className="seccion-pelis">
        <h2>Peliculas Populares</h2>
          {this.state.peliculas.map((peli, idx) => <peliculasCard key={peli.title + idx} datosPeli={peli} />)}
        </section>
      </>

    )
  }
}
export default PedidoPyS