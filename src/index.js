import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-thunk';
import reducers from './reducers';

import './index.css';
import App from './App';
import Contact from './components/Contact';
import { Navbar, Footer } from './components/layout';
import Merch from './components/Merch';
import Promo from './components/Promo';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
