import React, { Component } from 'react';
import Helmet from 'react-helmet';

/**
 *  The home scene of the application
 * @extends Component
 */
class Home extends Component<*> {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        Home
      </div>
    );
  }
}

export default Home;
