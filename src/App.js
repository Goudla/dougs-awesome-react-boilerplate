import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

// Scenes
import Root from './scenes/Root';

// Styles
import './App.css';

class App extends Component<*> {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Root} />
      </BrowserRouter>
    );
  }
}

export default App;
