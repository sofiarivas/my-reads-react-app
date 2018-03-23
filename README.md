# MyAwesomeReads Project

This is a small project dedicated to practice the knowledge adquire on the Udacity React Fundamentals course. 


## How to run the app?

* install all project dependencies with `npm install`
* start the development server with `npm start`


## Udacitys Backend server

For this project Udacity provided a backend server in order to focus only on  developing. This backend server provides a small books API. The file [`BooksAPI.js`](src/BooksAPI.js) contains the available methods on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)


### How can this methods be used?
### `getAll`

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves of the app.

### `update`

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

* query: `<String>`
* maxResults: `<Integer>` 
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Awesome Cookbook or PHP for dummies  don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Found this interesting?
You could go checkout the [Udacity React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019) which so far has been really interesting