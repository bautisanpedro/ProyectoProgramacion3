import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class seriesCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
          verMas: 'hide',
          favoritos: false
    
        }
      }

    
      render() {
        console.log(this.props);
        return (
          <section className='populares'>
            <Link to={`/detalleSerie/${this.props.id}`}>
              <article className="article-home">
                <img className="imagen-home" src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" />
                <div className="texto-home">
                  <p className="titulo-home">  {this.props.name}</p>
                </div>
              </article>
              </Link>
    
          </section>
        )
    
      }
    
}

export default seriesCard