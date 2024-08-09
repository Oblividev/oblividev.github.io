import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ObliviosaAnniversary from './pages/ObliviosaAnniversary';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ObliviosaAnniversary} />
        {/* ... other routes ... */}
      </Switch>
    </Router>
  );
}

export default App;