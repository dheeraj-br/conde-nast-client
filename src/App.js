/**
 * web app to retrieve news articles from newapi.org
 * author dheeraj.br2@gmail.com
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Articles from './components/Articles';
import Search from './components/Search';
import Pagination from './components/Pagination';
import ErrorPage from './components/ErrorPage';
import PageNotFound from './components/PageNotFound';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// environment variables from .env
const baseUrl = process.env.REACT_APP_BASEURL;
const everything = process.env.REACT_APP_EVERYTHING;
const topHeadline = process.env.REACT_APP_TOPHEADLINE

const App = () => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState();
    const [loading, setLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(1);
    const [apiError, setApiError] = useState();

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                let res;
                setLoading(true);
                // choose api end point depending on 'search' query 
                if (search) {
                    res = await axios.get(baseUrl + everything + '?page=' + page + '&search=' + search);
                } else {
                    res = await axios.get(baseUrl + topHeadline + '?page=' + page);
                }
                setArticles(res.data);
                setTotalResults(res.data.totalResults);
                setLoading(false);
            } catch (error) {
                setApiError(error.response.data.message);
            }
        }
        fetchArticles();
    }, [page, search]);

    const paginate = (pageNumber) => {
        setPage(pageNumber);
    }

    const searchHandler = (searchTerm) => {
        setSearch(searchTerm);
    }

    return (
        <div className="container-flex">
            <nav className="navbar navbar-light justify-content-between"  style={{backgroundColor: '#4267b2'}}>
                <a className="navbar-brand" href="/">
                    <img src='/logo.png' width="150" clssName="d-inline-block align-top" alt="" />
                </a>
                <Search search={searchHandler} />
            </nav>
            <div className="px-5">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            {
                                (!apiError) ?
                                    <>
                                        {
                                            (totalResults > process.env.REACT_APP_PAGESIZE) &&
                                            <Pagination
                                                pageSize={process.env.REACT_APP_PAGESIZE}
                                                totalPost={totalResults}
                                                paginate={paginate} />
                                        }
                                        <Articles articles={articles.articles} isLoading={loading} />

                                    </>
                                    :
                                    <ErrorPage error={apiError} />
                            }
                        </Route>
                        <Route path="*">
                            <PageNotFound />
                        </Route>
                    </Switch>
                </Router >
            </div>
        </div>
    )
}

export default App;