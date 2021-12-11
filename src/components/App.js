import React, { Component } from "react";
import "../styles/App.css";
class App extends Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }
  currentTime() {
    this.setState({ time: new Date() });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.currentTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <>
        <div className="date-time">
          <h1>11/12/2021,{this.state.time.toLocaleTimeString()}</h1>
        </div>
      </>
    );
  }
}

export default App;
