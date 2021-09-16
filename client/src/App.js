import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Fib from './Fib';
import Page from './Page'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/page">Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/page" component={Page} />
        </div>
      </div>
    </Router>
  );
}

export default App;
