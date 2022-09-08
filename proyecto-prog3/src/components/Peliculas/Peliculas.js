import React, { Component } from 'react'
import Pelicula from '../Pelicula/Pelicula';
import Search from '../Search/Search'
import Filtro from '../Filtro/Filtro';



class Peliculas extends Component {

    constructor(props){
        super(props)
        this.state={
            peliculas: [],
            backup:[],
            prueba:''
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/550?api_key=6e9de608b8eb72c41459072aa8da9928')
        .then(resp => resp.json())
        .then(data => this.setState({
            peliculas: data.results,
            backup:data.results
        }))
        .catch(err => console.log(err)) 
    }

    componentDidUpdate(){
    }

    borrar(name){
        let peliculasFiltradas = this.state.peliculas.filter(pelicula => pelicula.name !== name)
        this.setState({
            peliculas: peliculasFiltradas
        })
    }

    buscarPersonajes(nombre){
        fetch(`${nombre}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            peliculas: data.results
        }))
        .catch(err => console.log(err))
    }


    filtrarPersonajes(nombre){
        let arrayFiltrado = 
        this.state.backup.filter
        (pelicula => pelicula.name.toLowerCase().includes(nombre.toLowerCase()))

        this.setState({
            peliculas: arrayFiltrado
        })
    }

  render() {
    console.log('Soy el Render')
    return (
        <>
        <Filtro filtro={(nombre)=> this.filtrarPeliculas(nombre)} />
        <section className="card-container">
            {
                this.state.peliculas.length > 0 ?
                    this.state.peliculas.map((pelicula, idx) => 
                    <Character 
                    key={personaje + idx} 
                    info={personaje} 
                    borrar={(name) => this.borrar(name)}
                    />):
                <h1>Cargando..</h1>
            }
      </section>
        </>
    )
  }
}


export default Peliculas