import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Main from '../pages/Main/Main';
import SearchBook from '../pages/SearchBook/SearchBook';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/search_books" component={SearchBook} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
