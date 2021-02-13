import './App.css';
import Home from './Home/Home';
import ReviewPage from './ReviewPage/ReviewPage';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        {/*<Nav />*/}

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/ReviewPage' exact component={ReviewPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
