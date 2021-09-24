import React from 'react'

export default function Search(props) {
    return (
        <div >
            <div>
                <section>
                    <form action="" onSubmit={props.handleSubmit}> 
                        <div className="input">
                            <input type="text" aria-label="readonly input example" readonly placeholder="search movie.."  onChange={props.handleChange}></input>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}
