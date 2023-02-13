import React from "react";

class Test extends React.Component {
  //global state
  state = {
    name: "Hoang",
    class: "19DT",
  };

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChange(event)}
          />
          <input type="text" />
          My name is {this.state.name}
        </div>
        <div>Class {this.state.class}</div>
      </>
    );
  }
}

export default Test;
