import React, { Component } from 'react'
import { Link } from "react-router-dom"



class PeliculasCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      verMas: 'hide',
      favoritos: false

    }
  }
  verMas() {
    if (this.state.verMas === 'show') {
      this.setState({
        verMas: 'hide'
      })
    } else {
      this.setState({
        verMas: 'show'
      })
    }
  }

  render() {
    return (
      <section className='peliculaspopulares'>
        <a className="a-pelicula-home">
          <article className="pelicula-home">
            <img className="imagen-pelicula-home" src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" />
            <div className="texto-home">
              <p className="titulo"> <Link to={`/detalle/${this.props.id}`}> {this.props.name}</Link></p>
            </div>
          </article>
        </a>

      </section>
    )

  }
}


export default PeliculasCard