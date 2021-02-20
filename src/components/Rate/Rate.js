import React, { Component } from 'react';

import Calc from '../Calc';
import './Rate.css';

export default class Rate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'date': '',
            'currencyRate': {}
        }
        this.currency = ['USD', 'EUR', 'CAD'];
        this.getRate();
    }
    
    getRate = () => {
        fetch('https://api.exchangeratesapi.io/latest?base=RUB')
            .then(data => {
                return data.json()
            })
            .then(data => {
                this.setState({ date: data.date });
                let result = {};
                for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = data.rates[this.currency[i]];
                }
                this.setState({currencyRate: result})
            });
    }
  
    render() {

        return (
            <>
                <div className='rate'>
                    <h3>Курс валют на {this.state.date}</h3>
                    <div className="flex-container">
                        {Object.keys(this.state.currencyRate).map((keyName, i) => {
                            return (
                                <div className="block flex-item" key={keyName}>
                                    <div className="currency-name">{keyName}</div>
                                    <div className="currency-in">{(1 / this.state.currencyRate[keyName]).toFixed(2)} ₽</div>
                                    <p>* Можно купить 1 {keyName} за ₽</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Calc rate={this.state.currencyRate}/>
            </>
        )
    }
}
