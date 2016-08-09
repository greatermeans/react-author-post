import React, { Component } from 'react';
import './App.css';
import Selector from './components/selector'
import Authors from './components/authors'
import Books from './components/books'



class App extends Component {

  render() {
    return (
      <div className='main'>
        <div className='search-bar'>
          <Selector />
        </div>
        <div className='col-md-4 author-list'>
          <Authors list={this.props.store} />
        </div>
        <div className='col-md-8 book-list'>
          <Books list={this.props.store} />
        </div>
      </div>
    );
  }
}

export default App;
