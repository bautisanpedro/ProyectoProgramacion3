import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './PeliculasCard.css'


class PeliculasCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      estadoDetalle: 'hide',
      textoDetalle: 'Ver mas',


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

        <button className='boton-ver' onClick={() => this.verMas()}>Ver mas</button>

        <article className={this.state.verMas === true}>
          <p className={this.state.estadoDetalle}>{this.props.descripcion}</p>
        </article>
      </section>


    )

  }
}


export default PeliculasCard