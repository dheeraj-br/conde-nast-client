/**
 * web app to retrieve news articles from newapi.org
 * author dheeraj.br2@gmail.com
 */
import React from 'react';

const Pagination = ({ pageSize, totalPost, paginate }) => {
    const paginations = [];

    // set maximum pagination to 10 buttons since api has limit of 100 article for free usage  
    let paginationButtons = Math.min(Math.ceil(totalPost / pageSize), process.env.REACT_APP_API_LIMIT);

    for (let i = 1; i <= paginationButtons; i++) {
        paginations.push(i);
    }

    return (
        <ul className='pagination d-flex justify-content-center pt-4'>
            {
                paginations.map((number) => (
                    <li className="page-item" key={number}>
                        <button onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}

export default Pagination