import React, { Component } from 'react'

class Book extends Component {  
  render () {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.details.imageLinks.thumbnail})` }}></div>
        <div className="book-shelf-changer">
          <select value={this.props.details.shelf ? this.props.details.shelf : 'unselected'} onChange={(event) => {this.props.updateBook(this.props.details, event.target.value)}}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="unselected">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{this.props.details.title}</div>
      <div className="book-authors">{this.props.details.author}</div>
    </div> 
	)
	}
}

export default Book