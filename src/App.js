import React from 'react';
import axios from 'axios';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;