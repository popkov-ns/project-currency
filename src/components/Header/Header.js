import React, { Component } from 'react';

import Nav from '../Nav';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="top-bar animate-dropdown"></div>
          <div className="main-header">
              <div className="container">
                <h1 className="site-title">Курс обмены валюты</h1>
              </div>
          </div>
          <Nav />
      </header>
    </div>
    )
  }
}
