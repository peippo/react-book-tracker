import React, { Component } from 'react';
import Book from './Book.js';

class Shelf extends Component {
	render() {
		let titleIdentifier = this.props.camelize(this.props.title);

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