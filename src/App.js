import React, { Component } from 'react';
import './App.css';
import SmartSelector from './containers/selector'
import SmartAuthorList from './containers/authorList'
import SmartPostAdder from './containers/postAdder'




class App extends Component {

  render() {
    return (
      <div className='main'>
        <div className='search-bar'>
          <SmartSelector />
        </div>
        <div className='col-md-4 author-list'>
          <SmartAuthorList />
        </div>
        <div className='col-md-4 post-list'>
          <SmartPostAdder />
        </div>
      </div>
    );
  }
}

export default App;


