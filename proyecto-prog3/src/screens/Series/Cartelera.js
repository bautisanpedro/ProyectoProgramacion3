import React,{Component} from 'react'
import PeliculasCard from '../../components/PeliculasCard/PeliculasCard'


class Cartelera extends Component {

    
    constructor(props){
        super(props)
        this.state={
            data: [],
            verMas: "hide",
            cargarMas:''

            
        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=d7005b857875520a55d00ac604b383c7&language=en-US&page=1`)
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
            <p>Peliculas En Cartelera</p>
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


export default Cartelera