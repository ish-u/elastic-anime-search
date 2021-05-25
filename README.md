# anime-search

## Setup

Clone this Repository

```
git clone https://github.com/ish-u/elastic-anime-search.git
```

### Setup Server

- Install Packages

```
cd server
npm install
```

- Run Server

```
npm run dev
```

### Setup Client

- Go to the root folder an install packages

```
cd ..
npm install
```

- Name the search engine anime-datatset in Elastic App Search while creating the engine.

- Setup the API and the credentails for the Elastic App Search's Search API in `.env` file

```
VUE_APP_URL = {YOUR API ENDPOINT}
VUE_APP_SEARCH_KEY = {YOUR SEARCH KEY}
VUE_APP_ANIME_DATA = http://localhost:5000/getAnime/
```

- to run

```
npm run serve
```
