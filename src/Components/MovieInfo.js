import React from "react";

export default function MovieInfo(props) {

  return (
    <div className="container ">
      <div >
        <button className="favorite btn" style={{ cursor: "pointer", marginBottom:30}} onClick={ () => props.addFavoriteHandle(props.currentMovie.id) }>Add to Favorite</button>
      </div>
      <div className="col s12">
        <div className="card">
            <div className=" center-align">
            {
                props.currentMovie.poster_path == null 
                ? <img src={"https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg"} alt="this" style={{ width: "100%", height: "360px" }} class="card-img-top"></img>
                : <img src={`http://image.tmdb.org/t/p/w500${props.currentMovie.poster_path}`} alt="this" style={{ width: "auto"}} ></img>
            }
            
            </div> 
        </div>

        <div className="card-content" style={{ color:"white"}}>
        <span className="card-title">{props.currentMovie.title}</span>
            <p>{props.currentMovie.release_date}</p>
            <p>{props.currentMovie.overview}</p>
        </div>
      </div>
    </div>
  )
}

