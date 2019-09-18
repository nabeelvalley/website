import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Preloader from './Components/Preloader/Preloader';
import Navbar from './Navbar/Navbar'
import './App.css'

const Home = lazy(() => import('./Home/Home'));
const Zwartkops = lazy(() => import('./Zwartkops/Zwartkops'));

const App = (props) => (
  <div className="App">
    <Router>
      <Navbar />
      <Suspense fallback={Preloader}>
        <Switch>
          <Route exact path="/gallery/zwartkops" component={Zwartkops} />

          <Redirect exact from="/" to="home" />

          <Route exact path="/home" component={Home} />

          <Redirect to="/home" />
        </Switch>
      </Suspense>
    </Router>
  </div>
)
export default App