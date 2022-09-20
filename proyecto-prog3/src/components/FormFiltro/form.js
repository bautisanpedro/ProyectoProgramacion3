import React, {Component} from "react";

class Form extends Component{
constructor(props){
    super(props);
    this.state= {
        value: '',
    };
}
    evitarSubmit(event) {
        event.preventDefault();
    };
    controlarCambios(event) {
        this.setState({
            value: event.target.value
        }, () => this.props.filtrarMovies(this.state.value) );
        

    };
    render() {
        console.log(this.state)
        return(
            <form onSubmit={(event)=> this.evitarSubmit(event)}>
            <span className="material-symbols-outlined"> search </span>
            <input type='text' onChange={ (event)=> this.controlarCambios(event)} placeholder="Buscar Pelicula" name="usuario" value={this.state.value}  />
            </form>
        )
    }
}

export default Form;