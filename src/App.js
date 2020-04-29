import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </div>
);


const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={App} />
    </div>
  </Router>
);


export default AppRouter;
