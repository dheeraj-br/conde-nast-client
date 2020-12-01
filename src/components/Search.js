/**
 * web app to retrieve news articles from newapi.org
 * author dheeraj.br2@gmail.com
 */
import React from 'react';

const Search = ({ search }) => {
    
    // refer to dom element directly
    const searchRef = React.createRef();

    const submitHandler = (e) => {
        e.preventDefault();
        if(searchRef.current.value) {
            search(searchRef.current.value);
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div class="input-group">
                <input type="text" className="form-control" ref={searchRef} placeholder={process.env.REACT_APP_SEARCH_PLACEHOLDER} />
                <div class="input-group-append">
                    <input type="submit" className="btn btn-primary" value={process.env.REACT_APP_SEARCH_SUBMIT} />
                </div>
            </div>
        </form>
    )
}

export default Search;