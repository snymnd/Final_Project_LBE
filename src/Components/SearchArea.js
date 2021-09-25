import React, {Component} from 'react';

const SearchArea = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s4 offset-s4">
                    <form action="" className="input-field" onSubmit={props.handleSubmit}>
                        <div className="input-text">
                            <input className="searchInput" type="text"
                            placeholder="Search movie"
                            onChange={props.handleChange}/>    
                        </div>
                        <button id="search" onClick={props.handleSubmit}><i class="fas fa-search" id="icons"></i></button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SearchArea;
