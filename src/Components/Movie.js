import React from "react";
import { Link } from "react-router-dom";

const Movie = (props) => {
    return(
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image"
                        style={{width:"100%", height: 360}} /> : <img src={`https://image.tmdb.org/t/p/w500${props.image}`}/>
                    }
                </div>
                <div className="card-content">
                    <p>
                        <Link to="/MovieInfo" onClick={() => props.viewMovieInfo(props.movieId)}>View Details</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Movie
