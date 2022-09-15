import React, {Component} from 'react';
import PeliculasCard from '../../components/PeliculasCard/PeliculasCard';
import PedidoPyS from '../../components/PedidoPyS/PedidoPyS'
import Peliculas from '../../screens/Peliculas/Peliculas'
import Series from '../../screens/Series/Series'

import {Link} from 'react-router-dom'

class Home extends Component {
  render (){
    return(
    <>
    <Peliculas />
    <Link to ={`/TodasPeliculas`}><div className='div-btn'><button className="boton-home" onClick={()=>this.traerMas()} > Ver Todas las Peliculas</button></div></Link>
    <Series/>
    <Link to ={`/TodasSeries`}><div className='div-btn'><button className="boton-home" onClick={()=>this.traerMas()} > Ver Todas las Series</button></div></Link>
    </>
    )
  }
}
export default Home