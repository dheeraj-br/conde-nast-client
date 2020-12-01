/**
 * web app to retrieve news articles from newapi.org
 * author dheeraj.br2@gmail.com
 */
import React from 'react';

const ErrorPage = ({ error }) => {
    return (
        <div class="page-wrap d-flex flex-row align-items-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 text-center">
                        <span class="display-1 d-block">403</span>
                        <div class="mb-4 lead">{error}</div>
                        <a href="https://newsapi.org/" class="btn btn-link">newsapi.org</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage