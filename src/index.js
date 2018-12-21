import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
    </div>
</Router>

)

ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
