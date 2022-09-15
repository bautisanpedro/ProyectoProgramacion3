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
  

  render() {
    return (
      <section className='populares'>
        <a className="a-home">
          <article className="article-home">
            <img className="imagen-home" src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" />
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