import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
        <div className="header-nav">
            <div className="container">
                <nav>
                    <ul className="main-navigator">
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/about">О нас</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
  }
}
