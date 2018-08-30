import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from './pages/details';
import NoMatch from "./pages/NoMatch";
import Users from "./pages/Users";
import Test from './pages/Test';


class App extends Component {

  constructor(props){
      super(props)
        console.log('inside APP')
  }

  render() {

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Users} />
            <Route exact path='/test' component={Test} />
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