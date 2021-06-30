import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    stage: 1,
    players: [],
    result: "",
  };

  // Creating a new function to run the cases inb the adding new player

  addPlayerHandler = (name) => {
    this.setState((prevState, props) => ({
      players: [...prevState.players, players, name],
    }));
  };

  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            addPlayer: this.addPlayerHandler,
          }}
        >
          {this.props.children}
        </MyContext.Provider>
      </>
    );
  }
}

export { MyProvider, MyContext };
