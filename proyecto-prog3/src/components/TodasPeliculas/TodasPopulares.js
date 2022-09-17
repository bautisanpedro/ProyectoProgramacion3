import React,{Component} from 'react'
import PeliculasCard from '../PeliculasCard/PeliculasCard'


class TodasPopulares extends Component {

    
    constructor(props){
        super(props)
        this.state={
            data: [],
            verMas: "hide",
            cargarMas:''
            
        }
    }
    

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d7005b857875520a55d00ac604b383c7&language=en-US&page=1`)
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results.slice(0,12) 
            
        }))
        .catch(err => console.log(err)) 
    }
    
    masMovies(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&page=1${this.state.nextPage + 1}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results,
            cargarMas: data.page + 1
            
        }))
        .catch(err => console.log(err))

    }

    

  render() {
    return (
    <>
        <div className="titulo-pp">
            <p>Todas las peliculas populares</p>
        </div>
        <section className="card-container">
            {
                this.state.data.length > 0 ?
                    this.state.data.map((peli, idx) => 
                    <PeliculasCard 
                    key={peli + idx} 
                    name={peli.title} 
                    image={peli.poster_path}
                    descripcion={peli.overview}
                    id = {peli.id}
                    agregar = {(id) => this.agregarFavoritos(id)}

                    />):
                    <img src="https://giphy.com/embed/3y0oCOkdKKRi0"/>
            }
        </section>
        <button className='boton' type="button" onClick={ ()=>this.masMovies()}>Cargar más películas</button>
     </>
    )
  }
}


export default TodasPopulares