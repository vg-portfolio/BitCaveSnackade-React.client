import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-thunk';
import reducers from './reducers';

import './index.css';
import App from './App';
import { Navbar, Footer } from './components/layout';
import Merch from './components/Merch';
import Promo from './components/Promo';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <header>
            <Navbar position="static"/>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={App}/>
              <Route path="/merch" component={Merch}/>
              <Route path="/promos" component={Promo}/>
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
