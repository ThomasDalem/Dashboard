import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class MoneyConverter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      baseMoney: 'GBP',
      convertToMoney: 'USD',
      amount: 100,
      rates: [],
      moneyList: []
    };
    this.handleChangeBaseMoney = this.handleChangeBaseMoney.bind(this);
    this.handleChangeConvertToMoney = this.handleChangeConvertToMoney.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.getConvertedCurrency = this.getConvertedCurrency.bind(this);
    this.callAPI = this.callAPI.bind(this);
  }

  componentWillMount() {
    this.callAPI(this.state.baseMoney);
  }

  handleChangeBaseMoney(event) {
    this.setState({baseMoney: event.target.value});
    this.callAPI(event.target.value);;
  }

  handleChangeConvertToMoney(event) {
    this.setState({convertToMoney: event.target.value});
  }

  handleChangeAmount(event) {
    this.setState({amount: event.target.value});
  }

  getConvertedCurrency() {
    return Number.parseFloat(this.state.amount * this.state.rates[this.state.convertToMoney]).toFixed(3);
  }

  callAPI(base) {
    fetch(`https://api.exchangeratesapi.io/latest?base=${base}`).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({
        rates: data['rates'],
        moneyList: Object.keys(data['rates']).sort()
      });
    });
  }

  render() {
    const moneyChoice = this.state.moneyList.map(currency =>
      <option key={currency} value={currency}>{currency}</option>);

    const result = this.getConvertedCurrency(this.state.amount, this.state.convertToMoney, this.state.rates);

    return (
        <div className="card">
          <div className="money-converter-widget">
            <div className="info">
              <div>
                <box-icon name="dollar" color="green" size="lg"></box-icon>
                <h2 className="title">Money Converter</h2>
              </div>
              <div>
                <form>
                  <div>
                    <h3>Convert from: {this.state.baseMoney}</h3>
                    <select value={this.state.baseMoney} onChange={this.handleChangeBaseMoney}>
                      {moneyChoice}
                    </select>
                  </div>
                  <div>
                    <h3>Convert to: {this.state.convertToMoney}</h3>
                    <select value={this.state.convertToMoney} onChange={this.handleChangeConvertToMoney}>
                      {moneyChoice}
                    </select>
                  </div>
                  <div>
                    <h3>Amount:</h3>
                    <input type="number" defaultValue={this.state.amount} onChange={this.handleChangeAmount}></input>
                  </div>
                  <div>
                    {this.state.amount} {this.state.baseMoney} is equal to {result} {this.state.convertToMoney}
                  </div>
                </form>
              </div>
            </div>
            <div className="delete-widget">
              <button>delete</button>
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter(MoneyConverter);