import React, { Component } from "react";
import User from "./Component/User";
import { getUsers } from "./lib/api/NotionApi";

class App extends Component {

  constructor() {
    super();
    this.state = { users: [] };
  }

  async componentDidMount() {
    this.setState({
      users: await getUsers(),
    })
  }

  render() {
    return (
      <div>
        {
          this.state.users && this.state.users.map((user) => {
            return (
              <User key={user.id}{...user}/>
            )
          })
        }
      </div>
    );
  }
}

export default App;
