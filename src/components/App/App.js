import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from '../About';
import Contacts from '../Contacts';

import Header from '../Header';
import Rate from '../Rate';
import Footer from '../Footer';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Router>
          <Header />

          <div className="container">
            <main>
                <Switch>
                  <Route exact path='/' component={Rate} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/contacts' component={Contacts} />
                </Switch>
            </main>
          </div>
        </Router>

      <div className="container" id="cookie_info">
          <div className="site-content">
              <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br/>В частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего местоположения.&nbsp;
              <button className="btn btn-primary btn-sm">OK</button></div>
          </div>
      </div>

      <Footer />
    </div>
    )
  }
}
