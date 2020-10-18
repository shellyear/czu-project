import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <Router>
          <Header />
          <div id="main">
            <Switch>
              <Route path='/' component={Home} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
