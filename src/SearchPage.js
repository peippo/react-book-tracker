import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Book from './Book.js';

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
					<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
					<div className="search-books-input-wrapper">
						{/*
							NOTES: The search from BooksAPI is limited to a particular set of search terms.
							You can find these search terms here:
							https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

							However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
							you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input type="text" placeholder="Search by title or author" value={this.state.query}
						onChange={(event) => this.updateQuery(event.target.value)}/>

					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{
							this.state.searchMatches.map(searchMatch => (
								<li key={searchMatch.id}>
									<Book
										book={searchMatch}
										changeShelf={this.props.changeShelf}
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

export default Searchpage;