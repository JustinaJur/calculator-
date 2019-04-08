import React, { Component } from 'react';
import Main from "./Main"
import Screen from "./Screen";



class App extends Component {
  state = {
    screen: ""
  }

  handleClick = (e) => {
    var inputValue = e.target.innerText;
    switch (inputValue) {

      case "+":
        this.setState({
          screen: this.state.screen + inputValue
        });

      case "-":
        this.setState({
          screen: this.state.screen + inputValue
        });
        console.log(this.state.screen)

      case "*":
        this.setState({
          screen: this.state.screen + inputValue
        });

      case "/":
        this.setState({
          screen: this.state.screen + inputValue
        });

      case ".":
        this.setState({
          screen: this.state.screen + inputValue
        });

      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        this.setState({
          screen: this.state.screen + inputValue
        });
    }
  }

  result = () => {
    this.setState({
      screen: eval(this.state.screen)
    })
  }

  clear = () => {
    this.setState({
      screen: ""
    })
  }


  render() {
    return (
      <div className="calculator">
        <h1> CALCULATOR </h1>
        <Screen screen={this.state.screen} />
        <Main
          handleClick={this.handleClick}
          result={this.result}
          clear={this.clear}
        />
      </div >
    );
  }
}

export default App;
