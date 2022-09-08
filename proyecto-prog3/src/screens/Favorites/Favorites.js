import React, {Component} from 'react'

class Favorites extends Component{
    constructor(props){
        super(props)
        this.state={
            pelicula:[]
        }
    }
    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if(storage!== null){
            let parsedStorage = JSON.parse(storage)
            
            Promise.all(
                parsedStorage.map(elm =>{
                    return(
                        fetch(`https://api.themoviedb.org/3/movie/550?api_key=6e9de608b8eb72c41459072aa8da9928${elm}`)
                        .then(resp => resp.json())
                        .then(data => data))
                })
            )
            .then(data => console.log(data))
        }
    }

    render(){
        return(
            <h1>
                Favoritos
            </h1>
        )
    }
}

export default Favorites