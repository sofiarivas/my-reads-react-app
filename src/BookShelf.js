import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {  
  render () {
    return (
  	  <div className="bookshelf">
      	<h2 className="bookshelf-title">{this.props.currentShelf}</h2>
      	<div className="bookshelf-books">
          <ol className="books-grid">
      		  {this.props.currentBooks.map((book) => (
      			<li>
    			<Book details={book}/>
		        </li>
    		))}
      	  </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf