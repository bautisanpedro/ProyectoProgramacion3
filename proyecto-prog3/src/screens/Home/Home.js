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
  
    </>
    )
  }
}
export default Home