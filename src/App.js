import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage.js';
import SearchPage from './SearchPage.js';

import * as BooksAPI from './BooksAPI'
import './App.css';

class BooksApp extends React.Component {
	state = {
		books: []
	}

	updateBooks() {
		BooksAPI.getAll().then((books) => {
			this.setState({ books: books })
		});
	}

	componentDidMount() {
		this.updateBooks();
	}

	changeShelf = (book, shelf) => {
		BooksAPI.update(book, shelf)
		this.updateBooks();
	}

	render() {
		return (
			<div className="app">
				<Route exact path="/" render={() => (
					<HomePage
					books = {this.state.books}
					updateBooks = {this.updateBooks}
					changeShelf = {this.changeShelf}
					/>
				)} />

				<Route exact path="/search" render={() => (
					<SearchPage
						books = {this.state.books}
						updateBooks = {this.updateBooks}
						changeShelf = {this.changeShelf}
					/>
				)} />
			</div>
		)
	}
}

export default BooksApp;
