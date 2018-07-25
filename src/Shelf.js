import React, { Component } from 'react';
import Book from './Book.js';

class Shelf extends Component {

	// https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
	camelize = (str) => {
		return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
			return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
		}).replace(/\s+/g, '');
	}

	render() {
		let titleIdentifier = this.camelize(this.props.title);

		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{
							this.props.books
							.filter(book => book.shelf === titleIdentifier)
							.map(book => (
								<li key = {book.id}>
									<Book
										book = {book}
										changeShelf = {this.props.changeShelf}
									/>
								</li>
							))
						}
					</ol>
				</div>
			</div>
		)
	}
}

export default Shelf;