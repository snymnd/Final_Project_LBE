import React from "react";

const Pagination = (props) => {
    const pageLinks = []

    for(let i=1; i <= props.pages+1; i++)
    {
        let active = props.currentPage === i ? 'active' : '';
        pageLinks.push(
            <li className={`waves-effect ${active}`} key={i} onClick={()=> props.nextPage(i)}>
                <a href="top">{i}</a>
            </li>
        )
    }

    return(
        <div className="container">
            <div className="row">
                <ul className="pagination">
                    {
                        props.currentPage > 1 ?
                        <li className={`waves-effect`} onClick={()=> props.nextPage(props.currentPage-1)}>
                            <a href="top">Prev</a>
                        </li>
                        : ''
                    }
                    {pageLinks}
                    {
                        props.currentPage < props.pages+1 ?
                        <li className={`waves-effect`} onClick={()=> props.nextPage(props.currentPage+1)}>
                            <a href="top">Next</a>
                        </li>
                        : ''
                    }
                </ul>
            </div>
        </div>
    )
}

export default Pagination
