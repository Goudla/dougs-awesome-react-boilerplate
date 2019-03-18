import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

// Scenes
import Home from '../Home';

/**
 * The root of the application
 * @extends Component
 */
class Root extends Component<*> {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Root;
