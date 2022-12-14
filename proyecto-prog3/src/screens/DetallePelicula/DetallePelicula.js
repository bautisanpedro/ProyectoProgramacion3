import React, { Component } from "react";
import './DetallePelicula.css'


const api_key = '6e9de608b8eb72c41459072aa8da9928'
class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detalle: {},
            id: Number(props.match.params.id),
            fav: 'Agregar a Favoritos',


        }
    }
    
    componentDidMount() {
      
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${api_key}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({
                    detalle: data,
                })
            })
            .catch(error => console.log(error))

            let favoritos = [];
            let recuperoStorage = localStorage.getItem('favoritos')
    
            if(recuperoStorage !== null){
                let favoritosArray = JSON.parse(recuperoStorage);
                favoritos = favoritosArray
            }
    
            if(favoritos.includes(this.state.id)){
                this.setState({
                    fav: 'Quitar de favoritos'
                })
            }

    }
    funcionalidadFavoritos(id){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            let favoritosArray = JSON.parse(recuperoStorage);
            favoritos = favoritosArray
        }

        if(favoritos.includes(id)){
            favoritos = favoritos.filter(unId => unId !== id);
            this.setState({
                fav: 'Agregar a favoritos'
            })
        } else {
            favoritos.push(id);
            this.setState({
                fav: 'Quitar de favoritos'
            })
        }

        let favoritosString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favoritosString);

        console.log(localStorage);
    }
    render() {
        console.log(this.state.detalle.genres);
        return (
            <>
           
           {this.state.detalle === 0 ? <h3>Cargando...</h3> : 
         
                <main className="detalle-pelicula">
              
                    <div className="portada">
                        <img src={`https://image.tmdb.org/t/p/w342/${this.state.detalle.poster_path}`} alt=""></img>
                    </div>
                    <div className="milanesa">
                        <h1>{this.state.detalle.title}</h1>
                      
                            <p>Fecha de Estreno: {this.state.detalle.release_date}</p>
                            <p>Rating: {this.state.detalle.vote_average}</p> 

                            <p>Genero: {this.state.detalle.genres ? this.state.detalle.genres[0].name : <></>}</p>
                        
                            <button className="btn" onClick={() => this.funcionalidadFavoritos(this.state.id)}> {this.state.fav} <span className="material-symbols-outlined">favorite</span></button>

                            <p>{this.state.detalle.overview}</p>
                    
                    </div>
                 
                </main>
            }
            </>
        )
    }
}

export default Detalle