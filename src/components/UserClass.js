import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    // console.log(props.name + "constructor");
  }

  componentDidUpdate(){
    // console.log(this.props.name + " componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log(this.props.name + " componentWillUnmount");
  }

  componentDidMount() {
    // console.log(this.props.name + "componentDidMount");
    this.setState({
      count: 50
    })
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    // console.log(name + "render");
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {"Bangalore"}</h3>
        <h4>Email: {"kriti.15jan@gmail.com"}</h4>
      </div>
    );
  }
}

export default UserClass;
