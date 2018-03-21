import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBook extends Component {
  state = {
    books: []
  }

  componentDidMount() {
	this.getAllBooks()
  }

  getAllBooks = () => {
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

  searchBooks = (query, maxResults) => {
    if(query !== '') {
      BooksAPI.search(query, maxResults).then((matchingBooks) => {
        this.setState({ books: matchingBooks })
      })
    } else {
      this.getAllBooks()
    }
  }

  render() {
    return (
    <div className="search-books">
        <div className="search-books-bar">
		<Link
      		to="/"
      		className="close-search"
      	> Close </Link>
  		<div className="search-books-input-wrapper">
  		<input type="text" placeholder="Search by title or author" onChange={(event) => {this.searchBooks(event.target.value, 20)}}/>

    </div>
    </div>
    <div className="search-books-results">
    <ol className="books-grid">
      {this.state.books.map((book, index) => (
        <li key={index}>
          <Book details={book} updateBook={this.updateBook}/>
        </li>
      ))}
    </ol>
    </div>
        </div>
      )
    }
  }

export default SearchBook