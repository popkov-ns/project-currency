import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
        <div className="header-nav">
            <div className="container">
                <nav>
                    <ul>
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Пункты обмена</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
  }
}
