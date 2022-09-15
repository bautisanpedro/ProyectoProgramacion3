import React, { Component } from "react";

const api_key = '6e9de608b8eb72c41459072aa8da9928'

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detalle: {},


        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${api_key}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({
                    detalle: data,
                })
            })
            .catch(error => console.log(error))

    }


    render() {
        return (
            <>

              
            </>

            )
    }
}

export default Detalle