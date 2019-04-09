import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = {

    }
    this.showContent = this.showContent.bind(this);
  }

  showContent(navigation) {
    if(navigation === "me") {

    }
  }

  render() {
    return (
      <div className="App">
        <div className="navigation">
          <div onClick={() => this.showContent("me")}>me</div>
          <div>tech</div>
          <div>thought</div>

        </div>

        <div className="content">
          {/* {correspondingContent} */}
        </div>
      </div>
    );
  }
}

export default App;
