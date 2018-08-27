import React, { Component } from 'react';
import {
  TheBook,
  BookTitle,
  BookAuthors,
  BookTop,
  BookShelfChanger,
  BookCover,
  BookCoverTitle,
} from './BookStyle';

class Book extends Component {
  render() {
    return (
      <TheBook>
        <BookTop>
          <BookCover
            width="128"
            height="193"
            url="http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
          />
          <BookShelfChanger>
            <select>
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
        <BookTitle>To Kill a Mockingbird</BookTitle>
        <BookAuthors>Harper Lee</BookAuthors>
      </TheBook>
    );
  }
}

export default Book;
