import React, { Component } from "react";

let api_key = "6e9de608b8eb72c41459072aa8da9928"

class DetalleSerie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            detalleSerie: {}
        }
       
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    detalleSerie: data,
                })
            })
            .catch(e => console.log(e))
           
    }

    render() {
        
        return (
            
            <React.Fragment>

                <main className="detalle">
                    <div className="portada">
                        <img src={`https://image.tmdb.org/t/p/w500/${this.state.detalleSerie.poster_path}`} alt=""></img>
                    </div>
                    <div className="milanesa">
                        <h1>{this.state.detalleSerie.name}</h1>

                        <p>Fecha de Estreno: {this.state.detalleSerie.first_air_date}</p>
                        <p>Rating: {this.state.detalleSerie.vote_average}</p>
                        <button className="favoritos">Agregar a Favoritos  <span className="material-symbols-outlined">favorite</span></button>
                        <p>{this.state.detalleSerie.overview}</p>

                    </div>
                </main>
            </React.Fragment>
        )
    }
}


export default DetalleSerie;