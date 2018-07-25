import React, { Component } from 'react';

class Book extends Component {
	render() {
		let bookThumbnail = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : '';
		let currentShelf = this.props.book.shelf ? this.props.book.shelf : this.props.shelf;
		let authors = this.props.book.authors || [];

		return (
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookThumbnail}")` }}></div>
					<div className={`book-shelf-changer book-shelf-changer--${currentShelf}`}>
						<select
							onChange = {(event) => this.props.changeShelf(this.props.book, event.target.value)}
							value = {currentShelf}
						>
							<option value="move" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{this.props.book.title}</div>
				<div className="book-authors">

					{
						authors.map(author => (
							<span className="book-author" key = {author.id}>
								{author}
							</span>
						))
					}

				</div>
			</div>
		)
	}
}

export default Book;