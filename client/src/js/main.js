import MineSweeper from './views/mineSweeper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/home.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Practice from './views/practice.js';
import Compete from './views/compete.js';
import Leaderboard from './views/leaderBoard.js';
import Help from './views/help.js';
import Login from './views/login.js';
import UserStore from './data/store/userStore';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/practice" component={Practice} />
          <Route path="/compete" render={() => (
            UserStore.isUserLoggedIn() ? <Compete /> : <Redirect to="/login"/>
          )}/>
          <Route path="/leaderboard/" component={Leaderboard} />
          <Route path="/help" component={Help} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

