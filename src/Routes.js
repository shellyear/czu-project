import react from 'react';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
