import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './Home/Home'
import Zwartkops from './Zwartkops/Zwartkops'
import Navbar from './Navbar/Navbar'
import './App.css'

const App = (props) => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/" component={Navbar} />
        <Route exact path="/about" component={Home} />
        <Route path="/Gallery/Zwartkops" component={Zwartkops} />
        <Route component={Home} />
      </Switch>
    </Router>
  </div>
)
export default App