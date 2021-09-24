import React from 'react'

export default function Movie(props) {
    return (
        //colomn size 12
        <div>
            <div>
                <div style={{width:360}}>
                    {props.image == null 
                    ? <img src={"https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg"} alt="this" style={{width:"100%", height:360}} ></img>
                    : <img src={`http://image.tmdb.org/t/p/w500${props.image}`} alt="this" style={{width:"100%", height:360}}></img>
                    }
                    <div >
                        <p><a href="#">View Details </a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
