import Globals from './abstracts/Globals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PlanPage from './pages/PlanPage';
import Navbar from './components/shared/Navbar';

const App = () => {
  return (
    <>
      <Globals />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Plan' component={PlanPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
