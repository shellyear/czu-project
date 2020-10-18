import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Novels from './pages/Novels';
import ScienceFiction from './pages/ScienceFiction';
import Comics from './pages/Comics';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <Router>
          <Header />
          <div id="main">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/comics' component={Comics} />
              <Route path='/sci-fi' component={ScienceFiction} />
              <Route path='/novels' component={Novels} />
              <Route path='/about' component={About} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
