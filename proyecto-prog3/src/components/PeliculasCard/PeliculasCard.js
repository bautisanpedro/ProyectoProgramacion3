import React, { Component } from 'react'
import { Link } from "react-router-dom"



class PeliculasCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      verMas: 'hide',
      fav: 'Agregar a Favoritos',
    }
  }
  componentDidMount(){
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
    return (
      <section className='populares'>
        <Link to={`/detallePelicula/${this.props.id}`}> 
          <article className="article-home">
            <img className="imagen-home" src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" />
            <div className="texto-home">
              <p className="titulo"> {this.props.name}</p>
            </div>
            
          </article>
          </Link>
      <button className="favoritos" onClick={() => this.funcionalidadFavoritos(this.props.id)}> {this.state.fav} </button>
      </section>
    )

  }
}


export default PeliculasCard