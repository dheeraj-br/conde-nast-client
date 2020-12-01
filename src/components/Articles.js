/**
 * web app to retrieve news articles from newapi.org
 * author dheeraj.br2@gmail.com
 */
import React from 'react';

const Articles = ({ articles, isLoading }) => {

    // show loading message, prevent article render
    if (isLoading) {
        return <h2 className="d-flex justify-content-center"> {process.env.REACT_APP_LOADING} </h2>
    }

    let list;
    if (articles && articles.length != 0) {
        list = articles.map(post => {
            return <div class="card">
                <img class="card-img-top" src={post.urlToImage} alt={post.source.name} />
                <div class="card-body">
                    <a href={post.url}>
                        <h5 class="card-title">{post.title}</h5>
                    </a>
                    <p class="card-text">{post.description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated {new Date(post.publishedAt).toDateString()}</small>
                </div>
            </div>
        })
    } else {
        // show 'no more articles' messages when request exceeds available artiles
        list = process.env.REACT_APP_NO_ARTICLES;
    }

    return (
        <div class="card-columns">
            {list}
        </div>
    )
}

export default Articles;