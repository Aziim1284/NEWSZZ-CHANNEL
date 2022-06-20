import './App.css';

import React, { Component } from 'react'
import Menu from './component/menu';
import News from './component/News';

export default class App extends Component {

  render() {
    return (
      <div>
        <Menu/>
        <News pageSize={6} country="in" category="science"/>
      </div>
    )
  }
}
