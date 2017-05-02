import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers'
import promise from 'redux-promise';

import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new'
import PostsShow from './components/posts_show'

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore)


ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <Router>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
