import React, { Component } from 'react';
import Shelf from './Shelf.js';
import { Link } from 'react-router-dom';

class Homepage extends Component {
	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<Shelf
						title = "Currently reading"
						books = {this.props.books}
						updateBooks = {this.props.updateBooks}
						changeShelf = {this.props.changeShelf}
					/>
					<Shelf
						title="Want to read"
						books = {this.props.books}
						updateBooks = {this.props.updateBooks}
						changeShelf = {this.props.changeShelf}
					/>
					<Shelf
						title="Read"
						books = {this.props.books}
						updateBooks = {this.props.updateBooks}
						changeShelf = {this.props.changeShelf}
					/>
				</div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		)
	}
}

export default Homepage;