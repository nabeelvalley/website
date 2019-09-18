import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import Home from './Home/Home'
import Zwartkops from './Zwartkops/Zwartkops'
import Navbar from './Navbar/Navbar'
import './App.css'

const App = (props) => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/Gallery/Zwartkops" component={Zwartkops} />

        <Redirect exact from="/" to="home" />

        <Route path="/" component={Navbar} />
        <Route exact path="/about" component={Home} />

        <Redirect to="home" />
      </Switch>
    </Router>
  </div>
)
export default App