import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Book from './Book.js';
import { Link } from 'react-router-dom';

class Searchpage extends Component {
	state = {
		query: '',
		searchMatches: []
	}

	updateQuery = (query) => {
		this.setState({
			query: query
		})
		this.searchBooks(query);
	}

	searchBooks = (query) => {
		if (query) {
			BooksAPI.search(query).then((searchMatches) => {
				if (searchMatches.error) {
					this.setState({ searchMatches: [] });
				} else {
					this.setState({ searchMatches: searchMatches });
				}
			})
		} else {
			this.setState({ searchMatches: [] });
		}
	}

	render () {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">Close</Link>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author" value={this.state.query}
						onChange={(event) => this.updateQuery(event.target.value)}/>

					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{
							this.state.searchMatches.map(searchMatch => {
								let shelf = "none";

								this.props.books.map(book => (
									book.id === searchMatch.id ? shelf = book.shelf : ''
								));

								return (
									<li key={searchMatch.id}>
										<Book
											book={searchMatch}
											changeShelf={this.props.changeShelf}
											shelf = {shelf}
										/>
									</li>
								)
							})
						}
					</ol>
				</div>
			</div>
		)
	}
}

export default Searchpage;