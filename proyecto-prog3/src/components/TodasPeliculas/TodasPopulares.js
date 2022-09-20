import React,{Component} from 'react'
import PeliculasCard from '../PeliculasCard/PeliculasCard'
import Form  from "../FormFiltro/form"

class TodasPopulares extends Component {

    
    constructor(props){
        super(props)
        this.state={
            data: [],
            peliculas: [],
            verMas: "hide",
            cargarMas:''
            
        }
    }
    

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d7005b857875520a55d00ac604b383c7&language=en-US&page=1`)
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results.slice(0,12), 
            peliculas: data.results.slice(0,12)
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

    filtrarMovies(Fil) { 
        let filtrarMovies = this.state.data.filter( oneMovie => oneMovie.title.toLowerCase().includes(Fil.toLowerCase()))
        this.setState({
            peliculas: filtrarMovies,
        }, ()=>console.log(this.state))
    }

    render() {
    return (
    <>
        <div className="titulo-pp">
            <p>Todas las peliculas populares</p>
        </div>
        <Form filtrarMovies={(Fil) => this.filtrarMovies(Fil)}></Form>
        <section className="card-container">
            {
                this.state.peliculas.length === 0 ? <h1>Cargando...</h1>:
                    this.state.peliculas.map((peli, idx) => 
                    <PeliculasCard 
                    key={peli + idx} 
                    name={peli.title} 
                    image={peli.poster_path}
                    descripcion={peli.overview}
                    id = {peli.id}
                    agregar = {(id) => this.agregarFavoritos(id)}
                    />)
            }
        </section>
        <button className='boton' type="button" onClick={ ()=>this.masMovies()}>Cargar más películas</button>
     </>
    )
  }
}


export default TodasPopulares