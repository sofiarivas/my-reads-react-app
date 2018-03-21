import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {
  	state = {
      availableShelfs: [
        {id: 'currentlyReading', label: 'Currently Reading'}, 
        {id: 'read', label: 'Read'},
        {id: 'wantToRead', label: 'Want to read'}],
      books: []
    }
    componentDidMount() {
      BooksAPI.getAll().then((books) => {
          this.setState({ books })	
      })
    }
  	
	updateBook = (selectedBook, shelf) => {
      	this.setState(state => {
	        const unmodifyBooks = state.books.filter((book) => book.id !== selectedBook.id)
	        selectedBook.shelf = shelf
          	return {
	            books: unmodifyBooks.concat(selectedBook)
            }
        })
    	BooksAPI.update(selectedBook, shelf)
    }

	filterByShelf = (books, shelf) => {
      const match = new RegExp(escapeRegExp(shelf))
      let filteredBooks = books.filter((book) => match.test(book.shelf))
      return filteredBooks
    }

	render() {
      return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>My awesome reads</h1>
            </div>
            <div className="list-books-content">
              <div>
            	{this.state.availableShelfs.map((shelf) => (
      			  <BookShelf key={shelf.id} updateBook={this.updateBook} currentShelf={shelf.label} currentBooks={this.filterByShelf(this.state.books, shelf.id)} />
      	        ))}
              </div>
            </div>
            <div className="open-search">
        		<Link
					to="/search"
        		> Add a Book </Link>
        	</div>
      </div>
    )
  }
}

export default ListBooks