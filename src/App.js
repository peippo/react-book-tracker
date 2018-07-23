import React from 'react';
import HomePage from './HomePage.js';
import SearchPage from './SearchPage.js';

import * as BooksAPI from './BooksAPI'
import './App.css';

class BooksApp extends React.Component {
	state = {
		books: []
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({ books })
		});
	}

	render() {
		return (
			<div className="app">
				<HomePage books = {this.state.books}/>
			</div>
		)
	}
}

export default BooksApp;
