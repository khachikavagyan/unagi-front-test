import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import withNavbar from './components/withNavbar';
import { Collection } from './pages/Collection';
import { CreateCard } from './pages/CreateCard';
import { AllCards } from './pages/AllCards';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/collection" component={withNavbar(Collection)} />
      <Route exact path="/all-cards" component={withNavbar(AllCards)} />
      <Route exact path="/create-card" component={withNavbar(CreateCard)} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));
