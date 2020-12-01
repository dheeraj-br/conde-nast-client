# conde-nast-client

server built on reactjs v17.0.1 displays data from conde-nast-server

# api endpoints
* top headlines
* search from all news sources

# features
* lists top news from UK 
* search bar to filter any desired topic fetched from multiple news sources
* clicking on articles redirects to original website's news article

# setup
* clone conde-nast-server and conde-nast-client repositories 
* navigate to respective folders and run `npm start` form each of the folders

# environment variables
* create .env file at root of directory and add below variables changing values appropriately
```
REACT_APP_PAGESIZE = 10
REACT_APP_BASEURL = 'http://localhost:3000'
REACT_APP_LOADING = 'Loading ... '
REACT_APP_NO_ARTICLES = 'no more articles left'
REACT_APP_SEARCH_PLACEHOLDER = 'search'
REACT_APP_SEARCH_SUBMIT = 'Submit'
REACT_APP_API_LIMIT = 10
REACT_APP_EVERYTHING = '/everything'
REACT_APP_TOPHEADLINE = '/top-headlines'
```
