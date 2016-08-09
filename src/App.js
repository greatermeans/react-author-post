import React, { Component } from 'react';
import './App.css';
import Selector from './components/selector'
import Authors from './components/authors'



class App extends Component {

  render() {
    return (
      <div className='main'>
        <div className='search-bar'>
        <Selector />
        </div>
        <div className='author-list'>
          <Authors list={this.props.store} />
        </div>
      </div>
    );
  }
}

export default App;
