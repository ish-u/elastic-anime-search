# anime-search

An Anime Search Engine made using Elastic App Search and VueJS

- [devpost](https://devpost.com/software/anime-search)
- [youtube](https://youtu.be/nleuuJiubQ4)
- [demo](https://elastic-anime-search.netlify.app/)

## Setup Locally

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

- Go to the Elastic Website and signup for their Cloud. Create an Enterprise deployment and go to the Elastic App Search and create a Search Engine there
- Name the search engine anime-dataset in Elastic App Search while creating the Search Engine. Use this [link](https://www.kaggle.com/CooperUnion/anime-recommendations-database) to get the `anime.csv` file. Convert it to JSON and use the JSON to add data to the created engine.
- After this you will be able get the credentails through which you can use the search engine

- Setup the API and the credentails for the Elastic App Search's Search API in `.env` file

  ```
  VUE_APP_URL = {YOUR API ENDPOINT}
  VUE_APP_SEARCH_KEY = {YOUR SEARCH KEY}
  VUE_APP_ANIME_DATA = http://localhost:5000/getAnime/
  ```

- Run

```
npm run serve
```
