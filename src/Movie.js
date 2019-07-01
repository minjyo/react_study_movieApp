import React from 'react';
import PropTypes from 'prop-types'
import './Movie.css';
import { generateKeyPairSync } from 'crypto';

//속성의 종류: state(render필요), prop

//import React, {Component} from 'react';
//smart: state component 
// class Movie extends Component{

//     static PropTypes = { 
//         title: React.PropTypes.string,
//         poster: React.PropTypes.string
//     }

//     render(){
//     console.log(this.props);
//         return(
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h1>{this.props.title}</h1>
//             </div> 
//         )
//     }
// }

// class MoviePoster extends Component{

//     static PropTypes = { 
//         poster: React.PropTypes.string
//     }

//     render(){
//         return(
//             <img src={this.props.poster}></img>
//         )
//     }
// }


//dumb: stateless functional component
//render, lifecycle X return과 prop 만 필요
function Movie({title,poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie_Colums">
                <MoviePoster poster={poster} alt={title}></MoviePoster>
            </div>
            <div className="Movie_Colums">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
            </div>
            <p className="Movie_Synopsis">
                {synopsis}
            </p>
        </div>
    )
}
function MovieGenre({genre}){ 
    return (
        <span className="Moive_Genre">{genre}</span>
    )
} 
function MoviePoster({poster, alt}){ 
    return (
        <img src={poster} alt={alt} title={alt} className="Movie_Poster"/>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Movie;