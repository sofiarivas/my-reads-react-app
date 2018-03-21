import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import SearchBook from './SearchBook'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
    		<SearchBook/>
    	)}/>
		<Route exact path="/" render={() => (
            <ListBooks/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
