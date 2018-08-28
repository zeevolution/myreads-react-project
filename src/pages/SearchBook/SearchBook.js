import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from '../../components/Book/Book';
import * as BooksAPI from '../../utils/BooksAPI';
import {
  SearchBookBar,
  SearchBooksInputWrapper,
  CloseSearch,
  SearchBooksResults,
  BookGrid,
} from './SearchBookStyle';

class SearchBook extends Component {
  state = {
    query: '',
    loadingBooks: false,
    books: [],
  };

  updateQuery = query => {
    this.setState({
      query: query,
      loadingBooks: true,
    });
    if (query) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({
            loadingBooks: false,
            books: [],
          });
        } else {
          this.setState({
            loadingBooks: false,
            books: books,
          });
        }
      });
    } else {
      this.setState({
        loadingBooks: false,
        books: [],
      });
    }
  };

  shelfChanged = (book, event) => {
    this.setState({ loadingBooks: true });
    BooksAPI.update(book, event.target.value).then(shelfs => {
      this.setState({ loadingBooks: false });
    });
  };

  render() {
    const { query, loadingBooks, books } = this.state;

    return (
      <div>
        <SearchBookBar>
          <CloseSearch>
            <Link to="/">Close</Link>
          </CloseSearch>
          <SearchBooksInputWrapper>
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </SearchBooksInputWrapper>
        </SearchBookBar>
        <SearchBooksResults>
          <BookGrid>
            {loadingBooks ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : books.length ? (
              books.map(book => (
                <li key={book.id}>
                  <Book book={book} onShelfChange={this.shelfChanged} />
                </li>
              ))
            ) : query ? (
              'No results found'
            ) : (
              ''
            )}
          </BookGrid>
        </SearchBooksResults>
      </div>
    );
  }
}

export default SearchBook;
