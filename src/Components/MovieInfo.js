import React from "react";

const MovieInfo = (props) => {
    return(
        <div className="container">
            <div id="movieInfo" className="row" onClick={props.closeMovieInfo} style={{cursor:"pointer", paddingTop: 50}}>
                <i className="fas fa-arrow-left"></i>
                <span style={{marginLeft: 10}}>Go Back</span>
            </div>
            <div className="row">
                {props.currentMovie.poster_path == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image"
                        style={{width:"100%", height: 360}}></img> : <img src={`https://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}></img>}
            </div>
            <div id="movieDetails" className="col s12 m8">
                <p>{props.currentMovie.title}</p>
                <p>{props.currentMovie.release_date}</p>
                <p>{props.currentMovie.overview}</p>
            </div>
        </div>
    )
}

export default MovieInfo
