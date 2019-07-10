import React from "react";

import { connect } from "react-redux";
import { mapDispatchNavigationToProps } from "../../redux/actionCreators";

import { TextInput } from "react-materialize";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("Home Mounted");
    this.props.navigate("Home");
  }

  render() {
    return (
      <div className="card-panel lighten-2">
        <p>Home</p>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchNavigationToProps
)(Main);
