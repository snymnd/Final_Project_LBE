import React from "react";
import { Link } from "react-router-dom";

const Movie = (props) => {
    return(
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image == null ? <img src="https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg" alt="card"
                        style={{width:"100%", height: 360}} /> : <img src={`https://image.tmdb.org/t/p/w500${props.image}`} style={{width:"100%", height: 360}} alt="katanya gambar"/>
                    }
                </div>
                <div className="card-content">
                    <p>
                        <Link to={`/MovieInfo/${props.movieId}`} onClick={() => props.viewMovieInfo(props.movieId)}>View Details</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Movie
