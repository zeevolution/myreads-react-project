import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from '../Book/Book';
import {
  ListBooksTitle,
  ListBooksContent,
  Bookshelf,
  BookshelfTitle,
  BookshelfBooks,
  BookGrid,
  OpenSearch,
} from './BookShelfStyle';
import * as BooksAPI from '../../utils/BooksAPI';

class BookShelf extends Component {
  static propTypes = {
    shelfs: PropTypes.array.isRequired,
  };

  state = {
    loading: false,
    books: [],
  };

  componentDidMount() {
    this.setState({ loading: true });
    BooksAPI.getAll().then(books => {
      this.setState({
        books: books,
        loading: false,
      });
    });
  }

  shelfChanged = (book, event) => {
    this.setState({ loading: true });
    BooksAPI.update(book, event.target.value).then(shelfs => {
      BooksAPI.getAll().then(books => {
        this.setState({
          books: books,
          loading: false,
        });
      });
    });
  };

  render() {
    const { shelfs } = this.props;
    const { books, loading } = this.state;

    return (
      <div>
        <ListBooksTitle>
          <h1>MyReads</h1>
        </ListBooksTitle>
        <ListBooksContent>
          <div>
            {shelfs.map(shelf => (
              <Bookshelf key={shelf.name}>
                <BookshelfTitle>{shelf.display_name}</BookshelfTitle>
                <BookshelfBooks>
                  <BookGrid>
                    {loading ? (
                      <i className="fa fa-spinner fa-pulse" />
                    ) : (
                      books.filter(book => (book.shelf === shelf.name ? true : false)).map(book => (
                        <li key={book.id}>
                          <Book book={book} onShelfChange={this.shelfChanged} fromSearch={false} />
                        </li>
                      ))
                    )}
                  </BookGrid>
                </BookshelfBooks>
                <OpenSearch>
                  <Link to="/search_books">Add a Book</Link>
                </OpenSearch>
              </Bookshelf>
            ))}
          </div>
        </ListBooksContent>
      </div>
    );
  }
}

export default BookShelf;
