import React, { Component } from 'react';
import Main from "./Main"
import Screen from "./Screen";



class App extends Component {
  state = {
    screen: ""
  }

  handleClick = (e) => {
    let inputValue = e.target.innerText;
    if (e.target.tagName === "TD") {
      try {
        if (inputValue === "=") {
          this.setState({
            screen: eval(this.state.screen)
          })
        }
        else if (inputValue === "clear") {
          this.setState({
            screen: ""
          })
        }
        else {
          this.setState({
            screen: this.state.screen + inputValue
          });
        }
      }
      catch (err) {
        console.log(err)
        this.setState({
          screen: "error"
        })
      }
    }
  }


  render() {
    return (
      <div className="calculator">
        <h1> CALCULATOR </h1>
        <Screen screen={this.state.screen} />
        <Main
          handleClick={this.handleClick}
        />
      </div >
    );
  }
}

export default App;
