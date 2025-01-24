import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
  }

  render() {
    //  console.log("Parent render");
    return (
      <div>
        <h1>About Us Page</h1>
        <h2>This is react class component lecture</h2>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h3>Logged in user: {loggedInUser}</h3>}
        </UserContext.Consumer>
        <UserClass name={"First"} />
      </div>
    );
  }
}

export default About;
