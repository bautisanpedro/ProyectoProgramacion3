import React, {Component} from 'react';
import PeliculasCard from '../../components/PeliculasCard/PeliculasCard';
import PedidoPyS from '../../components/PedidoPyS/PedidoPyS'
import Peliculas from '../../screens/Peliculas/Peliculas'
import Cartelera from '../Series/Cartelera'
import Search from '../../components/Search/Search';


import {Link} from 'react-router-dom'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
        resultados: [],
        sinResultados: false
        
    }
}
buscador(name){
  if (name !== "") {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=0002daaf86f106b6b8226fa0a789628f&query=${name}`)
  .then(resp => resp.json())
  .then(data => {
      console.log(data)
      this.setState({
      resultados: data.results,

  })})
  
  
  }else{
    this.setState({
      resultados:[]
    })
  }
  
}

  render (){
    return(
    <>
    <Search filtrar ={(name) => this.buscador(name)}/> 
            { 
                this.state.resultados.length > 0 ? this.state.resultados.map((result, idx) => 
                <PeliculasCard 
                key={result + idx} 
                name={result.title} 
                image={result.poster_path}
                descripcion={result.overview}
                id = {result.id}
                agregar = {(id) => this.agregarFavoritos(id)}
                />)  : ""
            }
    <Peliculas />
    <Link to ={`/TodasPeliculas`}><div className='div-btn'><button className="boton-home" onClick={()=>this.traerMas()} > Ver Todas las Peliculas Populares</button></div></Link>
    <Cartelera/>
    <Link to ={`/TodasCartelera`}><div className='div-btn'><button className="boton-home" onClick={()=>this.traerMas()} > Ver Todas las Peliculas En Cartelera</button></div></Link>
    </>
    )
  }
}
export default Home