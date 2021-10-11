import Globals from './abstracts/Globals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import Home from './pages/Home';
import About from './pages/About';
import PlanPage from './pages/PlanPage';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Tag from './components/shared/Tag';

const App = () => {
  AOS.init({ offset: 10, duration: 1000, once: true });

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
        <Footer />
        <Tag />
      </Router>
    </>
  );
};

export default App;
