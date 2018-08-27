import React, { Component } from 'react';
import Book from '../Book/Book';
import {
  ListBooksTitle,
  ListBooksContent,
  Bookshelf,
  BookshelfTitle,
  BookshelfBooks,
  BookGrid,
} from './BookShelfStyle';

class BookShelf extends Component {
  render() {
    return (
      <div>
        <ListBooksTitle>
          <h1>MyReads</h1>
        </ListBooksTitle>
        <ListBooksContent>
          <div>
            <Bookshelf>
              <BookshelfTitle>Title</BookshelfTitle>
              <BookshelfBooks>
                <BookGrid>
                  <li>
                    <Book />
                  </li>
                  <li>
                    <Book />
                  </li>
                </BookGrid>
              </BookshelfBooks>
            </Bookshelf>
          </div>
        </ListBooksContent>
      </div>
    );
  }
}

export default BookShelf;
