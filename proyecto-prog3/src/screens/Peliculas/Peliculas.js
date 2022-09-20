import React,{Component} from 'react' 
import PeliculasCard from '../../components/PeliculasCard/PeliculasCard'

const api_key = '6e9de608b8eb72c41459072aa8da9928'

class Peliculas extends Component {

    
    constructor(props){
        super(props)
        this.state={
            data: [],
            verMas: "hide",
            cargarMas:''
            
        }
    }
    
    componentDidMount(){  // metodo -> lo ejecutamos despues del renderizado del componente en el dom
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`) // aca incluimos el pedido a la api
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
                    <img src="https://giphy.com/gifs/perfect-loops-17mNCcKU1mJlrbXodo"/>
            }
        </section>
     </>
    )
  }
}


export default Peliculas