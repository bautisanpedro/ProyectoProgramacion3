import React,{Component} from 'react'
import PeliculasCard from '../../components/PeliculasCard/PeliculasCard'

const api_key= '6e9de608b8eb72c41459072aa8da9928'
class Peliculas extends Component {

    
    constructor(props){
        super(props)
        this.state={
            data: [],
            verMas: "hide"
            
        }
    }
    traerMas(){
        //Traer la siguiente página de personajes
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`)
            .then( res => res.json())
            .then( data => this.setState({
                peliculas: data.results.concat(this.state.peliculas),
                nextUrl: data.info.next
            }))
            .catch()
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results.slice(0,12) 
            
        }))
        .catch(err => console.log(err)) 
    }
    

    

  render() {
    return (
    <>
        <div className="titulo-pp">
            <p>Peliculas Populares</p>
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
     </>
    )
  }
}


export default Peliculas