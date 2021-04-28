import React, { Component } from 'react';

import Routes from './components/App/Routes';
import TopNav from './components/App/TopNav';

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <main className="container">
          <Routes />
        </main>
      </div>
    );
  }
}

export default App;