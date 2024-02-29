import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  
  callAPI() {
    fetch(`${process.env.REACT_APP_API_URL}/api/jokes/random`)
    .then(res => res.json())
    .then(res => this.setState({apiResponse: res.results[0].joke_text}));
  }
  
  componentDidMount() {
    this.callAPI();
  }
  
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{this.state.apiResponse}</h1>
      </header>
    );
  }
}

export default App;
