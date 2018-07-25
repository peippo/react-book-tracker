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

	// https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
	camelize = (str) => {
		return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
			return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
		}).replace(/\s+/g, '');
	}

	render() {
		return (
			<div className="app">
				<Route exact path="/" render={() => (
					<HomePage
					books = {this.state.books}
					updateBooks = {this.updateBooks}
					changeShelf = {this.changeShelf}
					camelize = {this.camelize}
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
