import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookDefaultImg from '../../assets/images/book_default.png';
import { TheBook, BookTitle, BookAuthors, BookTop, BookShelfChanger, BookCover } from './BookStyle';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired,
  };

  render() {
    const { book, onShelfChange } = this.props;
    let bookShelf = book.shelf;

    return (
      <TheBook>
        <BookTop>
          {book.imageLinks ? (
            <BookCover width="128" height="193" url={book.imageLinks.thumbnail} />
          ) : (
            <BookCover width="128" height="193" url={BookDefaultImg} />
          )}
          <BookShelfChanger>
            <select defaultValue={bookShelf} onChange={event => onShelfChange(book, event)}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </BookShelfChanger>
        </BookTop>
        <BookTitle>{book.title}</BookTitle>
        {book.authors ? (
          book.authors.map(author => <BookAuthors key={author}>{author}</BookAuthors>)
        ) : (
          <BookAuthors>No Author Specified</BookAuthors>
        )}
      </TheBook>
    );
  }
}

export default Book;
