import React, {Component} from 'react'
import PeliculasCard from '../../components/PeliculasCard/PeliculasCard'

class Favorites extends Component{
    constructor(props){
        super(props)
        this.state={
            pelis:[]
        }
    }
    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage)
            let pelis = [];

            favoritos.forEach(unId => {
                fetch(`https://api.themoviedb.org/3/movie/${unId}?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US`)
                    .then(res => res.json())
                    .then(data => {
                        pelis.push(data)
                        this.setState({
                            pelis : pelis
                        })
                    })
                    .catch(error => console.log(error))
            })


            console.log(pelis);
        }
        
    }
    
    render(){
        return(
            <main>
                
                <h2>Tus películas favoritas</h2>
                <section className='cardContainer'>
                    { 
                        this.state.peliculas === 0 ? <h1>Cargando...</h1>: this.state.pelis.map((result, idx) => 
                        <PeliculasCard 
                        key={result + idx} 
                        name={result.title} 
                        image={result.poster_path}
                        descripcion={result.overview}
                        id = {result.id}
                        agregar = {(id) => result.agregarFavoritos(id)}
                        />)
                    }
                </section>
            </main>
        )
    }
}
export default Favorites