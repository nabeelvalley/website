import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Preloader from './Components/Preloader/Preloader';

const Home = lazy(() => import('./Home/Home'));
const Zwartkops = lazy(() => import('./Zwartkops/Zwartkops'));

const App = () => (
  <Router>
    <Suspense fallback={Preloader}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Gallery/Zwartkops" component={Zwartkops} />
        <Route component={Home} />
      </Switch>
    </Suspense>
  </Router>
)
export default App