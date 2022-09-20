import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './PeliculasCard.css'


class PeliculasCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      estadoDetalle: 'hide',
      textoDetalle: 'Ver mas',
      fav: 'Agregar a Favoritos',

    }
  }

  verMas() {
    if (this.state.estadoDetalle === 'show') {
      this.setState({
        estadoDetalle: 'hide', textoDetalle: 'Ver más'
      })
    } else {
      this.setState({
        estadoDetalle: 'show', textoDetalle: 'Ver menos'
      })
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
      <section className='detalle'>
        <Link to={`/detallePelicula/${this.props.id}`}>
          <article className="article-detalle">
            <img className="imagen-detalle" src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" />
            <div className="texto-detalle">
              <p className="titulo-popular"> {this.props.name}</p>
            </div>     
          </article>
        </Link>
 
 <p onClick={() => this.verMas()} className='more'> {this.state.textoDetalle} </p>

<p className={this.state.estadoDetalle} >Descripcion: {this.props.descripcion}</p>

      </section>


    )

  }
}


export default PeliculasCard