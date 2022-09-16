import React,{Component} from 'react'
import SeriesCard from '../../components/SeriesCard/SeriesCard'

const api_key= '6e9de608b8eb72c41459072aa8da9928'
class Series extends Component {

    
    constructor(props){
        super(props)
        this.state={
            data: [],
            verMas: "hide"
            
        }
    }
    traerMas(){
       
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`)
            .then( res => res.json())
            .then( data => this.setState({
                series: data.results.concat(this.state.series),
                nextUrl: data.info.next
            }))
            .catch()
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`)
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
            <p>Series Populares</p>
        </div>
        <section className="card-container">
            {
                this.state.data.length > 0 ?
                    this.state.data.map((serie, idx) => 
                    <SeriesCard 
                    key={serie + idx} 
                    name={serie.name} 
                    image={serie.poster_path}
                    descripcion={serie.overview}
                    id = {serie.id}
                    agregar = {(id) => this.agregarFavoritos(id)}

                    />):
                    <img src="https://giphy.com/embed/3y0oCOkdKKRi0"/>
            }
        </section>
     </>
    )
  }
}


export default Series