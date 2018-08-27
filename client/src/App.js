import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from './pages/details';
import { NoMatch } from "./pages/NoMatch";
import { Users } from "./pages/Users";
 
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Users} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/users/:id' component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
