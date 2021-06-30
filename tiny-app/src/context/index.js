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

  // creating the function to remove the players
  removePlayerHandler = (idx) => {
    let newArray = this.state.players;
    newArray.splice(idx, 1);
    this.setState({ players: newArray });
  };

  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            addPlayer: this.addPlayerHandler,
            removePlayer: this.removePlayerHandler,
          }}
        >
          {this.props.children}
        </MyContext.Provider>
      </>
    );
  }
}

export { MyProvider, MyContext };
