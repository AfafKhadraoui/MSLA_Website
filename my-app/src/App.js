import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>My E-commerce App</h1>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={() => <h2>Home Page</h2>} />
            <Route path="/cart" component={Cart} />
            <Route path="*" component={() => <h2>404 Not Found</h2>} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
