import React from 'react';
import ReactDOM from 'react-dom';

import Todolist from './todolist'
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Todolist />
  </Provider>
    ,
  document.getElementById('root')
);
