import React, { Component } from 'react';
import BookShelf from '../../components/BookShelf/BookShelf';

class Main extends Component {
  state = {
    shelfs: [
      {
        name: 'currentlyReading',
        display_name: 'Currently Reading',
      },
      {
        name: 'wantToRead',
        display_name: 'Want to Read',
      },
      {
        name: 'read',
        display_name: 'Read',
      },
    ],
  };

  render() {
    return (
      <div>
        <BookShelf shelfs={this.state.shelfs} />
      </div>
    );
  }
}

export default Main;
