import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './PeliculasCard.css'


class PeliculasCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      verMas: 'hide',
      favoritos: false

    }
  }
  
  verMas(){
    if(this.state.estadoDetalle === 'show'){
      this.setState({
        estadoDetalle:'hide', textoDetalle: 'Ver más'
      })
    } else {
      this.setState({
        estadoDetalle:'show', textoDetalle: 'Ver menos'
      })
    }
}

  render() {
    return (
      <section className='detalle'>
        <Link to={`/detallePelicula/${this.props.id}`}>   </Link>
          <article className="article-detalle">
            <img className="imagen-detalle" src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" /> 
            <div className="texto-detalle">
              <p className="titulo"> {this.props.name}</p> 
              {this.state.verMas ? 
                        <button className='boton-ver' onClick={() => this.hide()}>Ver mas</button>   
                        :   
                        <section className='extra'>                            
                            <p>{this.props.descripcion}</p> 
                            <button onClick={() => this.show()}>Ver menos</button>
                        </section>    }
                
            </div>

          </article>
        

      </section>
    )

  }
}


export default PeliculasCard