import React, { Component } from 'react'
import Genero from '../Genero/Genero'


class Generos extends Component {
  render(){
    return (
      <>
          <h2> Generos in database</h2>
          <section className='general-data'>
          {categorias.map( (categoria, idx) => <Genero key={categoria + idx} number={categoria} />)}
          </section>
      </>
    )
  }
}

export default Generos
