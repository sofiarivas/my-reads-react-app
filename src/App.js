import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook'
import BookShelf from './BookShelf.js'

class BooksApp extends React.Component {
  state = {
  	books: []
  }
  componentDidMount() {
  	BooksAPI.getAll().then((books) => {
  		this.setState({ books })	
  	})
  }
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
    		<SearchBook/>
    	)}/>
		<Route exact path="/" render={() => (
            <BookShelf/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
