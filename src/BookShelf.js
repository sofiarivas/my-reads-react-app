import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {  
  render () {
    return (
  	  <div className="bookshelf">
      	<h2 className="bookshelf-title">{this.props.currentShelf}</h2>
      	<div className="bookshelf-books">
          <ol className="books-grid">
      		  {this.props.currentBooks.map((book, index) => (
      			<li key={index}>
    			<Book details={book} updateBook={this.props.updateBook}/>
		        </li>
    		))}
      	  </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf