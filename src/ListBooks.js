import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  	state = {
      availableShelfs: ['currentlyReading', 'read', 'wantToRead']
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
            	{this.state.availableShelfs.map((shelf, index) => (
      			  <BookShelf key={index} currentShelf={shelf} currentBooks={this.filterByShelf(this.props.books, shelf)} />
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